import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/card';
import PokemonLogo from '../../assets/pokemon-logo.png'; 
import LoadingIcon from '../../assets/loading.png';

import { Container, MainTitle, PokemonCards, Loading } from './styles';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

interface IPokemon {
  name: string;
  url: string;
}

interface ApiResponse {
    results:IPokemon[];
};
interface IPokemonName {
  name: string;
}

export default function Home(): JSX.Element {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios.get<ApiResponse>(baseUrl).then((response) => {
              setResponse(response.data);
              setLoading(false);
            });
            
    
    
  }, []);
  
  return (
    <Container>
      <MainTitle>
        <img src={PokemonLogo} alt="Pokemon logo" width="200"/>
      </MainTitle>
      {!response || loading ? (
        <Loading>
          <img src={LoadingIcon} alt="Loading Icon" />
        </Loading>
      ) : (
        <>
        <PokemonCards>
         {response.results.map((pokemon)=>(
           <Card name={pokemon.name}/>
         ))}
         </PokemonCards> 
        </>
      )}
    </Container>
  );
}

