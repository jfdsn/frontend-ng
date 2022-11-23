import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title, Container, Text, Msg, Wrapper, Column } from "./style";
import { MdLock, MdAccountBox} from "react-icons/md";
import { useContext, useState } from "react";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";


export const Login = () => {

    const { auth, login } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState<string | null>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await api.post("/login", {username, password});
            
            login(res.data.token);

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
            <Header auth={auth}/>
            <Container>
                <Column>
                    <Title>A CARTEIRA DA NOVA GERAÇÃO</Title>
                    <Text>É para todas as idades!</Text>
                </Column>
                <Column>
                    <Wrapper>
                        <Title>FAÇA LOGIN</Title>
                        <form onSubmit={handleSubmit}>
                            <Input type="text" placeholder="nome de usuário" 
                                onChange={handleInputUser} leftIcon={<MdAccountBox />} />
                            <Input type="password" placeholder="senha" 
                                onChange={handleInputPass} leftIcon={<MdLock />} />
                            <Button type="submit" title="Entrar" />
                        </form>
                            <Msg>{msg}</Msg>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
};