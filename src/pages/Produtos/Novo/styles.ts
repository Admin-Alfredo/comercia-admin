import { Container as ContainerMain } from '../../../components/Utils/styles';
import { styled } from "styled-components";

export const Container = styled(ContainerMain)`
  & > h1{
      text-align: center;
      margin: 30px 0;   
  }

`

export const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`