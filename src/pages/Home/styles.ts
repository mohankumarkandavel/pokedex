import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;
  > p {
    margin-top: 40px;
    margin-bottom: 25px;
  }
  p {
    font-weight: bold;
    color: #fff;
    font-size: 20px;
  }
  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const MainTitle = styled.main`
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  @media (max-width: 900px) {
    img {
      width: 100%;
    }
  }
`;

export const PokemonCards = styled.div`
  margin: 0 auto;
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  grid-auto-rows:auto;
  grid-gap: 20px;
  @media (max-width: 900px) {
    grid-template-columns:repeat(2, 1fr);
  }
  @media (max-width: 580px) {
    grid-template-columns:repeat(1, 1fr);
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