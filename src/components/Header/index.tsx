import { 
    Wrapper,
    Container,
    Row
} from "./style";
import { Button } from "../Button";
import logo from "../../assets/logo-ng.png";
import { Link } from "react-router-dom";

type HeaderType = {
    auth?: boolean;
}

export const Header = ({ auth=false }:HeaderType) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to="/">
                        <img src={logo} alt="logo NG" />
                    </Link>   
                </Row>
                <Row>
                    {auth ? (
                        <Button variant="secondary" title="Sair" onClick={"#"}></Button>
                    ):(
                        <>
                            <Button variant="secondary" title="Entrar"  />
                            <Button variant="secondary" title="Cadastrar" />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
};