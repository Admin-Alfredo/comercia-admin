'use client';


import axios, { AxiosError } from "axios"
// import styles from './styles.module.css'
// import './styles.module.css'
import { useEffect, useState } from "react";
import { Card, Container, Hero, WrapperCards } from "./styles";

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

      return axios.get('http://localhost:5000/api/produtos').then(response => {
        console.log("PRODUTOS: ", response.data.produtos, response)
        setProdutos(response.data.produtos)
      }).catch((err: AxiosError) => console.log(err.message))
    }
    ApiGetProdutos()
  }, [])

  // console.log(data.produtos)
  const ApiSetVisible = async function ({ id, visible }: { id: string, visible: boolean }) {
    axios.put('http://localhost:5000/api/produtos' + id, { visible: !visible }).then(res => console.log("SET VISIBLE: ", res))
  }
  return (
    <Container>
      <Hero>
        <div>

        </div>
        <h1>Bem vindo</h1>
        <p>ao centro de administração da <strong>COMERCIA</strong></p>
        <div>
          <button className="btn primary">cradastrar novo produto</button>
        </div>
      </Hero>

      <WrapperCards>
        {produtos.map(produto =>
          <Card  key={produto._id}>
            <div className='card-header'>
              <img  src="/shop-image.png" alt="imagen do produto" />
              <span>{produto.preco} Kz </span>
            </div>
            <div className='card-body'>
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>

              <div className='button-actions'>
                <div className="switch-container">
                  <input type="checkbox" id={'swb-' + produto._id}/>
                  <label className="switch" htmlFor={'swb-' + produto._id}>
                    <div className="slider"></div>
                  </label>
                </div>
                <button className="btn primary">ver mais sobre</button>
              </div>
            </div>
          </Card>
        )}
      </WrapperCards>
    </Container>
  )
}

''