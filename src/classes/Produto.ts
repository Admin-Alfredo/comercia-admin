export interface ImageProduto {
  _id: string,
  url: string,
  altura: number,
  largura: number,
}
export interface Produto {
  _id: string,
  nome: string,
  preco: number,
  quantidade: number,
  descricao: string,
  imagens: ImageProduto[],
  visible: boolean
}
export interface DataProdutos {
  produtos: Produto[]
}