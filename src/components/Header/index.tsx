import { Wrapper, Container, Row } from "./style";
import { Button } from "../Button";
import logo from "../../assets/logo-ng.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


type HeaderType = {
    auth?: boolean;
}

export const Header = ({ auth=false }:HeaderType) => {
    const navigate = useNavigate();
    
    const { logout } = useContext(AuthContext);

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
                        <>
                            <Button variant="secondary" title="Minha conta"
                                 onClick={()=>{navigate("/user")}} />
                            <Button variant="secondary" title="Sair" onClick={logout} />
                        </> 
                    ):(
                        <>
                            <Button variant="secondary" title="Entrar"
                                onClick={()=>{navigate("/login")}}  />
                            <Button variant="secondary" title="Cadastrar"
                                onClick={()=>{navigate("/signin")}}  />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
};