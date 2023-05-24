import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Hero } from '../styles'
import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { BASE_API_URL } from '../../../../env';
import { Produto } from '../../../classes/Produto';
import { CardDetalhesProduto, WrapperCardDetalhes } from './styles';
import FormField from '../../../components/FormField';

export default function PageDetalhesProduto() {
  const [produto, setProduto] = useState<Produto[]>([])

  const { _id } = useParams()
  useEffect(() => {
    function ApiGetProduto() {
      axios.get(`${BASE_API_URL}/api/produtos/${_id}`).then((res: AxiosResponse) => {
        setProduto([res.data.produto])
        console.log("Produtos detalhados", res.data)
      })
    }
    ApiGetProduto()

  }, [])

  const handlerSetVisibleProduto = function ({ _id, visible, target }: { _id: string, visible: boolean, target?: HTMLElement }) {
    axios.put(`${BASE_API_URL}/api/produtos/` + _id, { visible: !visible })
      .then((res: AxiosResponse) => {
        console.log("SET VISIBLE: ", res.data)
        const input = target?.querySelector<HTMLInputElement>('input')
        if (input != null)
          input.checked = visible
      }).catch((err: AxiosError) => {
        console.log("SET VISIBLE: ", err)

      })
  }

  return (
    <>
      <Hero>
        <div >
          <h1 style={{ textAlign: 'center' }}>COMERCIA</h1>
          <p>detalhes do produto <strong>COMERCIA</strong></p>
        </div>

      </Hero>
      {produto.map(prod =>
        <WrapperCardDetalhes key={prod._id}>
          <CardDetalhesProduto >
            <div className='wrapper-image-produto'>
              <img src="/shop-image.png" />
            </div>
            <div className='wrapper-detalhes'>
              <h1> {prod.nome} </h1>
              <p>{prod.descricao}</p>
              <br />

              <FormField>
                <label > preço </label>
                <span>{prod.preco}</span>
              </FormField>
              <FormField>
                <label> quantidade </label>
                <span>{prod.quantidade}</span>
              </FormField>
              <FormField>
                <label > visibilidade</label>

                <div className="switch-container" onClick={(e: any) =>
                  handlerSetVisibleProduto(
                    {
                      visible: prod.visible,
                      _id: prod._id,
                      target: e.currentTarget
                    })
                }>
                  <input type="checkbox" id={'swb-' + prod._id} checked={prod.visible} />
                  <label className="switch" htmlFor={'swb-' + prod._id}>
                    <div className="slider"></div>
                  </label>
                </div>
              </FormField>

            </div>

          </CardDetalhesProduto>
        </WrapperCardDetalhes>
      )
      }
    </>
  )
}
