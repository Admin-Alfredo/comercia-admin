import { styled } from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    & > label{
      font-size: 1.2rem;
      color: #888888;
      font-weight: 600;
      padding-left: 5px;
    }
    & > label + input[type = text]
    & > input[type = number]{
      margin-top: 20px;
    }
    & > input[type = text],
    & > input[type = number]
    {
      height: 45px;
      border-radius: 15px;
      margin: 15px 0;
      border: none;
      background-color: #f3f3f3;
      padding: 15px;
      transition: all ease .1s;
      font-weight: 600;
      color: #98999a;
      font-size: 1.2em;
    }
    & > input[type = text]::placeholder,
    & > input[type = number]::placeholder{
      color: #ccc;
    }
    & > input[type = text]:focus, 
    & > input[type=number]:focus{
      outline: 2px solid  #bc89f1;
      border: 2px solid #a36cdf;
    }
`

