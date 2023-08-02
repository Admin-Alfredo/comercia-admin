import FormField from "../../../components/FormField";
import { HiCheckCircle, HiOutlineEye } from 'react-icons/hi'
import { TiImage } from 'react-icons/ti'
import { Container, Form } from "./styles";
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios, { AxiosResponse } from "axios";
import Button from "../../../components/Button";
import { Link } from 'react-router-dom'
import { BASE_API_URL } from "../../../../env";

class FileImageToSend {
  file: File;
  objectURL: string;
  constructor(file: File, url: string) {
    this.file = file;
    this.objectURL = url;
  }
  getFile() { return this.file; }
  getObjectURL(): string { return this.objectURL; }
}
export default function PageNovoProduto() {
  const { register, handleSubmit } = useForm()
  const [msg, setMsg] = useState<string[]>([])
  const [imagens, setImagens] = useState<FileImageToSend[]>([]);
  console.log("CARRREGANDO....")
  useEffect(() => {
    // document.querySelector('dialog')?.showModal()
  }, [])
  const createProduto = (data: any) => {
    document.querySelector<HTMLDialogElement>('.dialog-produto')?.showModal()
    console.log("NOVO PRODUTO: >> ", data)
    fetch('http://localhost:5000/api/produtos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data, preco: Number(data.preco), quantidade: Number(data.quantidade) })
      }).then((res: Response) => res.json())
      .then((data) => {
        setMsg(["Criado com successo"])
        if (imagens.length < 0)
          return;
        const formdata: FormData = new FormData()
        imagens.forEach((fits: FileImageToSend) => {
          formdata.append('altura', '1000')
          formdata.append('largura', '1000')
          formdata.append('aspectRatio', '1.2')
          formdata.append('image', fits.getFile());
        })
        fetch(BASE_API_URL + '/api/produto/uploads/' + data.produto._id, { method: 'POST', body: formdata, headers: { 'Content-type': 'image/*' } })
          .then((response => {
            console.log(response)
          }))
          .catch((err: Error) => {
            console.error(err.message)
          })
      })
  }

  const formdata: FormData = new FormData()

  const handlerChangeUploadsFile = (e: any) => {
    const files: FileList = e.target.files

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i)
      const url = URL.createObjectURL(file as File)
      setImagens([...imagens, new FileImageToSend(file as File, url)])
    }
  }
  const handlerClickButtonViewer = (e: any) => {
    document.querySelector<HTMLDialogElement>('.dialog-view-image')?.showModal()

  }
  const handlerClickSelectImage = (e: any) => document.querySelector<HTMLInputElement>('#input-file-image')?.click()

  useEffect(() => {

  }, [imagens])
  return (
    <Container>
      <dialog className="dialog-produto" style={{
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
              document.querySelector<HTMLDialogElement>('.dialog-produto')?.close()
            }}>fechar</button>

          <Link to="/admin/produtos">
            <button className="btn primary"> ver produto</button>
          </Link>
        </div>
      </dialog>

      {/* HELLO */}
      <dialog
        className="dialog-view-image"
        style={{
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
          <h5>imagens de produtos</h5>
        </div>
        <div style={{
          padding: '10px 15px',
        }}>
          {imagens.map(function (item) {
            return (<img src={item.getObjectURL()} alt={item.getFile().name} width={200} />)
          })}
        </div>
        <div style={{
          padding: '10px 15px'
        }}>
          <button
            style={{ marginRight: 20 }}
            className="btn primary"
            onClick={() => {
              document.querySelector<HTMLDialogElement>('.dialog-view-image')?.close()
            }}>fechar</button>

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
            <button type="button" style={{ background: '#FFF' }} onClick={handlerClickSelectImage}>
              <label htmlFor="image"><TiImage size={30} color="#888888" /></label>
            </button>
            <button type="button" style={{ background: '#FFF' }} onClick={handlerClickButtonViewer}>
              <HiOutlineEye size={30} color="#888888" />
            </button>
          </div>
          <input type="file" id="input-file-image" onChange={handlerChangeUploadsFile} style={{ display: 'none' }} multiple accept="image/x-png,image/jpeg" />
        </div>
        <Button label="Adicionar novo produto" />
      </Form>
    </Container>
  )
}

