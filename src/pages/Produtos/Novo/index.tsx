import FormField from "../../../components/FormField";
import { HiOutlineEye } from 'react-icons/hi'
import { TiImage } from 'react-icons/ti'
import { Container, Form } from "./styles";
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios, { AxiosResponse } from "axios";
import Button from "../../../components/Button";
import { Link } from 'react-router-dom'

export default function PageNovoProduto() {
  const { register, handleSubmit } = useForm()
  const [msg, setMsg] = useState<string[]>([])
  console.log("CARRREGANDO....")
  const createProduto = (data: any) => {
    console.log("NOVO PRODUTO: >> ", data)

    fetch('http://localhost:5000/api/produtos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...data, preco: Number(data.preco), quantidade: Number(data.quantidade)})
      }).then(data => {
        setMsg( ["Criado com successo"])
      })


  }
  return (
    <Container>
      <Link to="/admin/produtos">
        {msg.map(data => <p> {data} </p>)}
        {/* <button>voltar em produtos</button> */}
      </Link>
      <h1>Registrar novo produto</h1>
      <Form onSubmit={handleSubmit(createProduto)}>
        <FormField>
          <label htmlFor="nome" className="blockcot">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="nome do produto"
            {...register('nome')}
          />
        </FormField>
        <FormField>
          <label htmlFor="preco" className="blockcot">Preço</label>
          <input
            type="text"
            id="preco"
            placeholder="preço do produto"
            {...register('preco')}
          />

        </FormField>

        <FormField >
          <label htmlFor="quantidade" className="blockcot">quantidade</label>
          <input
            type="text"
            id="quantidade"
            placeholder="quantidade do produto"
            {...register('quantidade')}
          />

        </FormField>
        <FormField >
          <label htmlFor="descricao" className="blockcot">descricao</label>
          <input
            type="text"
            id="descricao"
            placeholder="add uma descrição do produto"
            {...register('descricao')}
          />
        </FormField>

        <div className="form-field-select-image">
          <div className="form-field-actions">
            <button type="button" >
              <label htmlFor="image"><TiImage size={30} color="#888888" /></label>
            </button>
            <button type="button">
              <HiOutlineEye size={30} color="#888888" />
            </button>
          </div>
          {/* <input type="file" id="image" {...register('image')} /> */}
        </div>
        <Button label="Adicionar novo produto" />
      </Form>
    </Container>
  )
}

