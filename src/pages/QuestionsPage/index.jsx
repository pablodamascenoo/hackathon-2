import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../assets/global_styles/Conponents.style";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

export default function QuestionsPage() {
    const { token, user } = useContext(AuthContext);
    const { id } = useParams();
    const [questions, SetQuestions] = useState([]);

    // const token = "1e80542b-3cb8-428b-9c3a-5911712ac98a";

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    console.log(questions);

    useEffect(() => {
        const promisse = axios.get(
            `https://escola-online.herokuapp.com/question/${id}`,
            config
        );

        promisse.then((obj) => {
            const { data } = obj;
            SetQuestions([...data]);
        });
    }, []);

    return (
        <Container>
            <h1>
                {questions.map((question) => {
                    return question.enunciate;
                })}
            </h1>
        </Container>
    );
}
