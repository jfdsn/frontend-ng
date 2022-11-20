import { 
    Wrapper,
    Container,
    Column,
    Row
} from "./style";
import { Button } from "../Button";
import logo from "../../assets/logo-ng.png";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to="/">
                        <img src={logo} alt="logo NG" />
                    </Link>
                    
                </Row>
                <Row>
                    <Button variant="secondary" title="Entrar" onClick={"*"} />
                    <Button variant="secondary" title="Cadastrar" onClick={"*"} />
                </Row>
            </Container>
        </Wrapper>
    )
};