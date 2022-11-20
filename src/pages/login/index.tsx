import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title, Container, Text, ErrorMsg, Wrapper, Column } from "./style";
import { MdLock, MdAccountBox} from "react-icons/md";

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
                            <Input placeholder="nome de usuário" leftIcon={<MdAccountBox />}></Input>
                            <Input placeholder="senha" leftIcon={<MdLock />}></Input>
                            <Button type="submit" title="Entrar"></Button>
                        </form>
                            <ErrorMsg>Error aqui!</ErrorMsg>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
};