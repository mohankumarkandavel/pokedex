import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;
  padding-bottom: 70px;
  margin-top: 20px;
  p {
    font-weight: bold;
    font-size: 24px;
  }
  a > img {
    width: 40px;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const Main = styled.main`
  padding-bottom: 60px;
  text-align: center;
  h1 {
    font-size: 50px;
    text-transform: uppercase;
    color:#000000;
  }
  img {
    width:50%;
  }
  @media (max-width: 580px) {
    img {
      width:100%;
    }
  }
`;

export const Info = styled.section`
  padding: 15px;
  margin: 0 auto;
  background-color: #ffcc01;
  border-radius: 10px;
  text-align: center;
  width: 50%;
  section + & {
    margin-top: 20px;
  }
  h2{
    font-size:32px;
  }
  h3{
    font-size:24px;
    color:#3b4cca;
  }
  p{
    background-color:#3b4cca;
    padding:5px 20px;
    margin:10px;
    border-radius:5px;
    color:#fff;
    font-size:24px;
}
  @media (max-width: 900px) {
    width: 90%;
    p{
      font-size:16px;
    }
  }
`;

export const Loading = styled.div`
  text-align: center;
  img {
    width: 50px;
    animation-name: spinner;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;