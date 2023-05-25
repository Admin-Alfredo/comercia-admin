import FormField from "../../../components/FormField";
import { HiCheckCircle, HiOutlineEye } from 'react-icons/hi'
import { TiImage } from 'react-icons/ti'
import { Container, Form } from "./styles";
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios, { AxiosResponse } from "axios";
import Button from "../../../components/Button";
import { Link } from 'react-router-dom'

export default function PageNovoProduto() {
  const { register, handleSubmit } = useForm()
  const [msg, setMsg] = useState<string[]>([])
  console.log("CARRREGANDO....")
  useEffect(() => {
    // document.querySelector('dialog')?.showModal()
  }, [])
  const createProduto = (data: any) => {
    document.querySelector('dialog')?.showModal()
    console.log("NOVO PRODUTO: >> ", data)
    fetch('http://localhost:5000/api/produtos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data, preco: Number(data.preco), quantidade: Number(data.quantidade) })
      }).then(data => {
        setMsg(["Criado com successo"])
      })


  }
  return (
    <Container>
      <dialog style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        borderRadius: 8,
        color: "#333"
      }}>
        <div style={{
          padding: '10px 8px',
          borderBottom: '1px solid #ccc',

        }}>
          <h5>criando produto</h5>
        </div>
        <div style={{
          padding: '10px 15px',
        }}>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <HiCheckCircle size={30} color="#53a653" />
            Produto criado com successo!</p>
        </div>
        <div style={{
          padding: '10px 15px'
        }}>
          <button
            style={{ marginRight: 20 }}
            className="btn primary"
            onClick={() => {
              document.querySelector('dialog')?.close()
            }}>fechar</button>

          <Link to="/admin/produtos">
            <button className="btn primary"> ver produto</button>
          </Link>
        </div>
      </dialog>
    
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
            <button type="button" style={{background: '#FFF'}}>
              <label htmlFor="image"><TiImage size={30} color="#888888" /></label>
            </button>
            <button type="button" style={{background: '#FFF'}}>
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

