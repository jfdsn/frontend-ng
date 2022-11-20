import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title, Container, Text, ErrorMsg, Wrapper, Column } from "./style";

export const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A CARTEIRA DA NOVA GERAÇÃO</Title>
                    <Text>É para todas as idades!</Text>
                    <Button title="Começar Agora!" onClick={() => {"null"}}></Button>
                </Column>
                <Column>
                    <Wrapper>
                        <Title>Faça Login</Title>
                        <form>
                            <Input placeholder="nome de usuário"></Input>
                            <Input placeholder="senha"></Input>
                            <Button type="submit" title="Entrar"></Button>
                        </form>
                            <ErrorMsg>Error aqui!</ErrorMsg>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
};