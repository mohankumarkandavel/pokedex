import styled from 'styled-components';
import { IAbility } from '../interface';

export default function Ability(props:{abilities:IAbility[]}): JSX.Element {  
    return(
        <>
        <Types>
        {props.abilities.map((abilities:IAbility) => <p>{abilities.ability.name}</p>)}
        </Types>
        </>
    );
};
export const Types = styled.div`
    display:flex;
    text-align: center;
    justify-content:center;
`;