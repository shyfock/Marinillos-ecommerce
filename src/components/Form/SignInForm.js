import { Form, FormBtn, FormContainer, FormLabel, FormTitle, Input } from "./FormElements"
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "universal-cookie";
import { calculateSessionExpiration } from "../helper/helper";
import Loading from "../Loading/loading";

const cookies = new Cookies();
const URL = process.env.REACT_APP_API_URL;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    let data = {
        email: email,
        password: password
    }
    const handleLogin = async (e, url = `${URL}/users/login`) => {
        e.preventDefault()
        e.options = {passive: false}
        setLoading(true);
        console.log({loading})
        await fetch(url , {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.token === null) {
                alert("¡Usuario y/o contraseña inválidos!")
            } else {
                cookies.set("_s", data.token, {
                    path: "/",
                    expires: calculateSessionExpiration()
                })
                
                window.location.replace(localStorage.getItem("url"))
                
            }
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        })
        
    }
    return (
        <FormContainer>
            <Loading show={ loading } />
            <FormTitle>Iniciar Sesión</FormTitle>
            <Form action="" method="post">
                <FormLabel htmlFor="email">Ingresa tu e-mail</FormLabel>
                <Input id="email" type="email" name="email" placeholder="Email" autoComplete="username" onChange={(e) => setEmail(e.target.value)}/>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <Input id="password" type="password" name="password" placeholder="Contraseña" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)}/>
                <FormBtn type="submit" onClick={handleLogin}>Ingresar</FormBtn>
            </Form>
            <Link to="/sign-up">No tengo una cuenta</Link>
        </FormContainer>
    );
};

export default Login;