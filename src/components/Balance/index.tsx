import { Container, Text, HideButton } from "./style";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { useState } from "react";

type BalanceType = {
    value: number;
}

export const Balance = ({value}: BalanceType) => {
    const [hide, setHide] = useState(true);
    const [real, setReal] = useState("---------------");

    const handleClick = () => {
        if(hide) {
            setHide(false);
            setReal(value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        } else {
            setHide(true);
            setReal("---------------"); 
        }  
    };

    return (
        <Container>
            <Text>{real}</Text>
            <HideButton onClick={handleClick}>{!hide ? <MdVisibilityOff /> : <MdVisibility />}</HideButton>
        </Container>
    )
};