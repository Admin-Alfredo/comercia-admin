import { styled } from 'styled-components';




export const WrapperCardDetalhes = styled.div`
  position: relative;
  width: 100%;
  margin: -50px 30px 0 30px;
`
export const CardDetalhesProduto = styled.div`
  width: 70%;
  height: 300px;
  box-shadow: 0 5px 15px #ccc;
  background-color: #FFF;
  margin: 0 auto;
  border: 1px solid #aaa;
  padding: 15px;
  display: flex;
  & > .wrapper-image-produto{
    width: 290px;
    height: 100%;
    margin-right: 30px;
    > img{
      width: 100%;
      height: 100%;
    }
  }
  & > .wrapper-detalhes{

  }

`