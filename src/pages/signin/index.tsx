import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title, Container, Text, Msg, Wrapper, Column, Span } from "./style";
import { MdLock, MdAccountBox} from "react-icons/md";
import { useState } from "react";
import { api } from "../../services/api";



export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await api.post("/user", {username, password});
            setMsg("Conta criada!");
        } catch (error) {
            setMsg("Usuário ou senha inválidos.");
        }
            
    };

    const handleInputUser = (e: any) => {
        setUsername(e.target.value);
    };

    const handleInputPass = (e: any) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A CARTEIRA DA NOVA GERAÇÃO</Title>
                    <Text>É para todas as idades!</Text>
                </Column>
                <Column>
                    <Wrapper>
                        <Title>FAÇA CADASTRO</Title>
                        <form onSubmit={handleSubmit}>
                            <Span>(4 ou mais caracteres)</Span>
                            <Input type="text" placeholder="usuário" 
                                onChange={handleInputUser} leftIcon={<MdAccountBox />} />
                            <Span>(8 ou mais caracteres, ao menos um número e uma letra maiúscula)</Span>      
                            <Input type="password" placeholder="senha" 
                                onChange={handleInputPass} leftIcon={<MdLock />} />
                            <Button type="submit" title="Cadastrar" />
                        </form>
                            <Msg>{msg}</Msg>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
};