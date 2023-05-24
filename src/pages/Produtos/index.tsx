import axios, { AxiosError, AxiosResponse } from "axios"

import { useEffect, useState } from "react";
import { Card, Container, Hero, WrapperCards, Section } from "./styles";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "../../../env.ts"
const ApiSetVisible = async function (id: string) {
  axios.get('http://localhost:5000/api/produtos')
}

interface ImageProduto {
  _id: string,
  url: string,
  altura: number,
  largura: number,
}
interface Produto {
  _id: string,
  nome: string,
  preco: number,
  quantidade: number,
  descricao: string,
  imagens: ImageProduto[],
  visible: boolean
}
interface DataProdutos {
  produtos: Produto[]
}
export default function PageAdmin() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    const ApiGetProdutos = async function () {

      return axios.get(`${BASE_API_URL}/api/produtos`).then(response => {
        console.log("PRODUTOS: ", response.data.produtos, response)
        setProdutos(response.data.produtos)
      }).catch((err: AxiosError) => console.log(err.message))
    }
    ApiGetProdutos()
  }, [])

  // console.log(data.produtos)
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
    <Container>
      <Hero>
        <div >
          <h1>Bem vindo</h1>
          <p>ao centro de administração da <strong>COMERCIA</strong></p>
        </div>
        <div>
          <Link to="/admin/produtos/novo">
            <button className="btn primary">cradastrar novo produto</button>
          </Link>
        </div>
      </Hero>

      <Section>

        <h1>Produtos no estoque</h1>
        <p className="alert">
          Podes alterar a visibilidade do produto clicando no switch button
          Uma vez visivel os clientes poderão adequir o produto, quando o rpoduto terminar o a visibilidade se desativará.
        </p>
        <WrapperCards>
          {produtos.map(produto =>
            <Card key={produto._id}>
              <div className='card-header'>
                <img src="/shop-image.png" alt="imagen do produto" />
                <span>{produto.preco} Kz </span>
              </div>
              <div className='card-body'>
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>

                <div className='button-actions'>
                  <div className="switch-container" onClick={(e: any) =>
                    handlerSetVisibleProduto(
                      {
                        visible: produto.visible,
                        _id: produto._id,
                        target: e.currentTarget
                      })
                  }>
                    <input type="checkbox" id={'swb-' + produto._id} checked={produto.visible} />
                    <label className="switch" htmlFor={'swb-' + produto._id}>
                      <div className="slider"></div>
                    </label>
                  </div>
                  <Link to={`/admin/produtos/detalhes/${produto._id}`}>
                    <button className="btn primary">ver mais sobre</button>
                  </Link>
                </div>
              </div>
            </Card>
          )}
        </WrapperCards>
      </Section>


    </Container>
  )
}

''