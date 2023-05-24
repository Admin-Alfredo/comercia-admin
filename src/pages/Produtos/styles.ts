import { styled } from 'styled-components';
import { Container as BaseContainer } from '../../components/Utils/styles'
export const Container = styled(BaseContainer)`
  position: relative;
  margin: 0 auto;
  /* max-width: 1024px; */  
`
export const Hero = styled.div`
  width: 100%;
  display: flex;
  background-image: url('/bg-hero-admin-1.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;
  & > div:first-child{
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px;
    /* border-left: 4px solid #FFF; */
  }
  & > div:first-child > h1{
    color: #FFF;
  }
  & > div:first-child > p{
    color:#ccc;
    font-size: 1.7rem;
  }
  & > div:last-child{
    flex:1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
  }
  & > div:last-child button{
    max-width: 260px;
    padding: 15px;
  }
`

export const Section = styled.section`
  width: 100%;
  padding: 0 40px;
  margin-top: 100px;
  & > h1{
    font-size: 3.5rem;
    text-align: center;
    margin: 8px 0;
  }
  & > p{
    text-align: center;
  }
`

export const WrapperCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 80px -15px 80px -15px;
`

export const Card = styled.div`
  margin: 20px 15px;
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

