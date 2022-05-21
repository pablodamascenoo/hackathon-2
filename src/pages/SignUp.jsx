import { Container } from "../assets/global_styles/Conponents.style";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import styled from "styled-components";

const SignUpContainer = styled(Container)`
    margin-inline: auto;
    width: 100%;
    flex-direction: column;
    gap: 15px;
    font-family: "Poppins", sans-serif;

    form {
        width: 80%;
        display: flex;
        flex-direction: column;

        gap: 15px;
    }

    h1 {
        font-size: 52px;
        font-weight: bold;
        margin-bottom: 35px;
        width: 80%;
        text-align: start;
        color: #7d2ffa;
    }

    .btn {
        width: 100%;
        margin-top: 20px;
        background: #8f4aff;
        &:hover {
            background: #7d2ffa;
        }
    }

    a {
        margin-top: 15px;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const target = event.target;
        signUpData[target.name] = target.value;
        setSignUpData(signUpData);
    };

    const signUp = () => {
        if (signUpData.password !== signUpData.password2) {
            alert("A senha deve ser igual!");
            return;
        }
        const promise = api.post("sign-up", {
            name: signUpData.name,
            email: signUpData.email,
            password: signUpData.password,
        });
        promise.then((response) => {
            console.log(response);
            navigate("/HomePage/");
        });
        promise.catch((err) => {
            console.log(err);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp();
    };

    return (
        <SignUpContainer>
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    variant="filled"
                    className="input"
                    color="secondary"
                    type="text"
                    onChange={handleChange}
                    name="name"
                    required
                />
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
                    label="Senha"
                    variant="filled"
                    className="input"
                    color="secondary"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    required
                />
                <TextField
                    label="Confirme a senha"
                    variant="filled"
                    className="input"
                    color="secondary"
                    type="password"
                    onChange={handleChange}
                    name="password2"
                    required
                />
                <Button
                    className="btn"
                    variant="contained"
                    size="large"
                    type="submit"
                >
                    Cadastrar
                </Button>
            </form>
            <Link to="/">Já tem conta? faça login</Link>
        </SignUpContainer>
    );
};

export default SignUp;
