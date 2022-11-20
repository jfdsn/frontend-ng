import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Title, Container, Text } from "./style";

export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>A CARTEIRA DA NOVA GERAÇÃO</Title>
                    <Text>É para todas as idades!</Text>
                    <Button title="Começar Agora!" onClick={() => {"null"}}></Button>
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