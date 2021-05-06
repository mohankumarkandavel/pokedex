import styled from 'styled-components';
import { IType } from '../interface';

export default function Type(props:{types:IType[]}): JSX.Element {  
    return(
        <>
        <Types>
        {props.types.map((types:IType) => <p>{types.type.name}</p>)}
        </Types>
        </>
    );
};
export const Types = styled.div`
    display:flex;
    text-align: center;
    justify-content:center;
`;