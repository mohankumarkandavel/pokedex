import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
import Type from '../../components/type';
import Ability from '../../components/ability';
import Move from '../../components/move';
import LoadingIcon from '../../assets/loading.png';
import { Container, Main, Info, Loading } from './styles';
import { ApiResponse } from '../../interface';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

interface RouteParam {
  pokemonName: string;
}


export default function Pokemon(): JSX.Element {
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const { pokemonName } = useParams<RouteParam>();

  useEffect(() => {
    axios
      .get<ApiResponse>(baseUrl + pokemonName)
      .then((response) => setResponse(response.data));
  }, []);

  return (
    <Container>
       <Link to="/">
        <p>Back Pokedex</p>
      </Link>
      {!response ? (
        <Loading>
          <img src={LoadingIcon} alt="Loading Icon" />
        </Loading>
      ) : (
        <>
          <Main>
            <h1>{pokemonName} #{response.id}</h1>
            
            <img
              src={response.sprites.other['official-artwork'].front_default}
              alt={pokemonName + ' image'}
            />
          </Main>

          <Info>
            <h2>Weigth</h2>
            <h3>{response.weight} lbs</h3>
          </Info>
          <Info>
            <h2>Heigth</h2>
            <h3>{response.height} ft</h3>
          </Info>
          <Info>
            <h2>Base XP</h2>
            <h3>{response.base_experience}</h3>
          </Info>
          <Info>
          <h2>Type</h2>
          <Type types={response.types}></Type>
          </Info>
          <Info>
          <h2>Ability</h2>
          <Ability abilities={response.abilities}></Ability>
          </Info>
          <Info>
          <h2>Move</h2>
          <Move moves={response.moves}></Move>
          </Info>
          
        </>
      )}
    </Container>
  );
}

