import { Container } from "../assets/global_styles/Conponents.style";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import api from "../services/api";
import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const ContainerLogin = styled(Container)`
    margin-inline: auto;
    width: 100%;
    flex-direction: column;
    gap: 15px;

    h1 {
        font-size: 52px;
        font-weight: bold;
        margin-bottom: 25px;
        width: 80%;
        text-align: start;
        color: #7d2ffa;
    }

    h2 {
        width: 80%;
        font-weight: bolder;
        font-size: 26px;
    }

    p {
        width: 80%;
        font-size: 19;
        color: #696969;
        margin-bottom: 30px;
    }

    .btn {
        width: 100%;
        margin-top: 20px;
        background: #8f4aff;
        &:hover {
            background: #7d2ffa;
        }
    }

    form {
        width: 80%;
        display: flex;
        flex-direction: column;

        gap: 15px;
    }

    .input {
        width: 100%;
    }
`;

const Login = () => {
    const [signIn, setSignIn] = useState({ email: "", password: "" });
    const { setUser, setToken, token } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log("teste");

    const login = () => {
        const promise = api.post("sign-in", signIn);
        promise.then((response) => {
            setToken(response.data.token);
            setUser({ user: response.data.name });
            navigate("/HomePage/");
        });
        promise.catch((err) => {
            console.log(err);
        });
    };

    const handleChange = (event) => {
        const target = event.target;
        signIn[target.name] = target.value;
        console.log(signIn);
        setSignIn(signIn);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("cabeça dagua");
        login();
    };

    return (
        <ContainerLogin color="#fefefe">
            <h1>Escola.Online</h1>
            <h2>Bem Vindo de volta,</h2>
            <p>Para continuar, faça login:</p>

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="filled"
                    className="input"
                    color="secondary"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    required
                />
                <TextField
                    label="Password"
                    variant="filled"
                    className="input"
                    color="secondary"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    required
                />
                <Button
                    className="btn"
                    variant="contained"
                    size="large"
                    type="submit"
                >
                    Login
                </Button>
            </form>
        </ContainerLogin>
    );
};

export default Login;
