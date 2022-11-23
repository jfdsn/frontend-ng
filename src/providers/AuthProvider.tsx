import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

export const AuthProvider = (props: any) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);

    const login = (jwt:string) => {
        localStorage.setItem("token", jwt);
        api.defaults.headers.authorization = `Bearer ${jwt}`;    
        setToken(jwt);
        navigate("/user");
    };

    const logout = () => {
        localStorage.removeItem("token");
        api.defaults.headers.authorization = null;
        setToken(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{auth: Boolean(token), token, setToken, login, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
};