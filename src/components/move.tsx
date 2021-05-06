import styled from 'styled-components';
import { IMove } from '../interface';

export default function Move(props:{moves:IMove[]}): JSX.Element {  
    return(
        <>
        <Moves>
        {props.moves.map((moves:IMove) => <p>{moves.move.name}</p>)}
        </Moves>
        </>
    );
};
export const Moves = styled.div`
    display:flex;
    flex-direction:column;
    text-align: center;
    justify-content:center;
    
`;