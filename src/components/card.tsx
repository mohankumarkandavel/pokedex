import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

interface IPokemonName {
    name: string;
}

interface Type {
    type: {
      name: string;
    };
}

interface ApiResponse {
    id:number;
    name:string;
    types: Type[];
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
}
export default function Card(props:IPokemonName): JSX.Element { 
    const [response, setResponse] = useState<ApiResponse | null>(null);

    useEffect(() => {
        axios
          .get<ApiResponse>(baseUrl + props.name)
          .then((response) => setResponse(response.data));
      }, []);

    return(
        <>
        <PokeCard key={response?.id}>
              <Link to={'/' + response?.name}>
                <img
                    src={response?.sprites.other['official-artwork'].front_default}
                    alt={response?.name + ' image'}
                    />
                
                <Number>#{response?.id}</Number>
                <Name>{response?.name}</Name>
                <Type>{response?.types.map((type)=>(
                    <p>{type.type.name}</p>
                    ))}</Type>
               
              </Link>
        </PokeCard>
        
        </>
        
    );

};

export const PokeCard = styled.div`
    background-color: #ffde00;
    border-radius:10px;
    padding:20px;
    text-align: center;
    img {
        width: 50%;
    }
`;
export const Type = styled.div`
    display:flex;
    text-align: center;
    justify-content:center;
    p{
        background-color:#3b4cca;
        padding:5px 20px;
        margin:10px;
        border-radius:5px;
    }
`;
export const Name = styled.div`
    text-align: center;
    font-size:32px;
    color:#FFF;
`;
export const Number = styled.div`
    text-align: center;
    font-size:20px;
    color:#4c4c4c;
`;