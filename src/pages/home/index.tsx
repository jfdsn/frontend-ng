import { Header } from "../../components/Header";
import { Title, Container, Text } from "./style";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const Home = () => {
  
    const { auth } = useContext(AuthContext);

    return (
        <>
            <Header auth={auth} />
            <Container>
                <div>
                    <Title>A CARTEIRA DA NOVA GERAÇÃO</Title>
                    <Text>É para todas as idades!</Text>
                </div>
                <div>
                    <Title>SOBRE</Title>
                    <Text>Somos a carteira digital da Nova Geração.</Text>
                    <Text>Viemos te ajudar a construir a sua independência financeira.</Text>
                    <Text>
                        Vivemos o novo, transformando o futuro. Afinal, depois do ponto, vem um novo começo.
                    </Text>
                </div>
            </Container>
        </>
    )
};