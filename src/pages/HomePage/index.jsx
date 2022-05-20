import { useState, useEffect } from "react"
import axios from "axios";

import TopBar from "../TopBar"
import { Container } from "./styles";

export default function HomePage(){
    const [classes, setClasses] = useState(null);

    useEffect(() => {
        //CONSERTAR O GET!!!!!!
        const request = axios.get("");
        request.then(resp => {
            console.log(resp.data);
            setClasses(resp.data);
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