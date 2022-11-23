import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Signin } from "../pages/signin";
import { User } from "../pages/user";
import { AuthProvider } from "../providers/AuthProvider";

export const AppRoutes = () => {
  
    const Private = (props: any) => {
        const { auth } = useContext(AuthContext);

        if(!auth) {
          return <Navigate to="/login" /> 
        };

        return props.children;
    };

    return (
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/user" element={<Private><User /></Private>} />
            </Routes> 
          </AuthProvider>
        </Router>
    );
};
  
