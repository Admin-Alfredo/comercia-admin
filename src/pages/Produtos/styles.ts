import { styled } from 'styled-components';

export const Container = styled.div `
  padding: 0 30px;
  margin: 0 auto;
  /* max-width: 1024px; */
`
export const Hero = styled.div`
  display: flex;
  
`

export const WrapperCards = styled.div`
  display: flex;
  flex-wrap: nowrap;

`

export const Card = styled.div`
  margin: 0 15px;
  width: 300px;
  box-shadow: 0 5px 15px #ccc;

  & > .card-header{
    position: relative;
  }
  & > .card-header > img {
    width: 100%;
  }
  & > .card-header > span {
    position: absolute;
    left: 15px;
    bottom: 10%;
    font-size: 1.4rem;
    color: #888888;
    font-weight: 600;
  }
  & > .card-body{
    padding: 8px 15px;
  }
  & > .card-body > h3{
    font-size: 1.4rem;
    color: #888888;
    font-weight: 600;
    text-align: center;
    margin: 15px 0;
  }
  & > .card-body > p{
    color: #ccc;
    margin: 0px 0px 15px 0;
    text-align: center;
  }
  & > .card-body > .button-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > .button-actions > .button-actions button{
    margin: 0 0 0 15px;

  }
`

