import { Container, Text, HideButton } from "./style";
import { MdVisibilityOff, MdVisibility, MdAutorenew } from "react-icons/md";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

type BalanceType = {
    value: number;
}

export const Balance = ({value}: BalanceType) => {
    const [hide, setHide] = useState(false);
    const [valor, setValor] = useState(value);
    const [real, setReal] = useState("---------------");

    useEffect(()=> {
        setReal(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    }, [valor]);
    
    const handleClickHide = () => {
        if(hide) {
            setHide(false);
            setReal(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        } else {
            setHide(true);
            setReal("---------------"); 
        }  
    };

    const handleClickAtt = async () => {
        const res = await api.get("/balance");
        setValor(parseFloat(res.data.balance));
        if(!hide)setHide(false);
    };

    return (
        <Container>
            <Text>{real}</Text>
            <HideButton onClick={handleClickAtt} title="atualizar">{<MdAutorenew />}</HideButton>
            <HideButton onClick={handleClickHide} title="Esconder/Mostrar">
                {!hide ? <MdVisibilityOff /> : <MdVisibility />}
            </HideButton>
        </Container>
    )
};