import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../context/authContext";
import axios from "axios";

import TopBar from "../TopBar"
import { Container, Section } from "./styles";

export default function HomePage(){
    const [classes, setClasses] = useState(null);
    const { token } = useContext(AuthContext);
    //const token = "892a406b-858c-450c-9b30-1595812253d7";
    const config = { 
        headers: { 
            Authorization: `Bearer ${token}`
        }
    };

    useEffect(() => {
        //CONSERTAR O GET!!!!!!
        const request = axios.get("https://escola-online.herokuapp.com/subjects", config);
        request.then(resp => {
            console.log(`data: ${resp.data}`);
            setClasses([...resp.data]);
        })
    })

    return(
        <>
            <TopBar />
            <Container>
                {classes.map(singleClass => {
                    return(
                        <Section>
                            <img src={singleClass.image}/>
                            <article>
                                <h1>{singleClass.subject}</h1>
                                <h2>{singleClass.description}</h2>
                            </article>
                        </Section>
                    )
                })}
            </Container>
        </>
    )
}