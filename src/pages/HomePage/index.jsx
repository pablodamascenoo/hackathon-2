import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

import TopBar from "../TopBar";
import { Container, Section } from "./styles";

export default function HomePage() {
    const [classes, setClasses] = useState(null);
    const { token } = useContext(AuthContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() => {
        const request = axios.get(
            "https://escola-online.herokuapp.com/subjects/",
            config
        );
        request.then((resp) => {
            console.log(resp);
            setClasses([...resp.data]);
        });
        request.catch((e) => {
            console.log(e);
        });
    }, []);

    return (
        <>
            <TopBar />
            <Container>
                {classes?.map((singleClass) => {
                    return (
                        <Section>
                            <img src={singleClass.image} />
                            <article>
                                <h1>{singleClass.subject}</h1>
                                <h2>{singleClass.description}</h2>
                            </article>
                        </Section>
                    );
                })}
            </Container>
        </>
    );
}
