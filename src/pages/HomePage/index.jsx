import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { Link } from "react-router-dom";

import TopBar from "../TopBar"
import { Container, Section } from "./styles";

export default function HomePage(){
    const [classes, setClasses] = useState(null);
    const { token } = useContext(AuthContext);
    const config = { 
        headers: { 
            Authorization: `Bearer ${token}`
        }
    };
   
    useEffect(() => {
        //CONSERTAR O GET!!!!!!
        const request = axios.get("https://escola-online.herokuapp.com/subjects/", config);
        request.then(resp => {
            setClasses([...resp.data]);
        })
        request.catch(e => {
            console.log(e);
        })
    }, []);

    return(
        <>
            <TopBar />
            <Container>
                {classes?.map(singleClass => {
                    return(
                        <Link to={`/question/${singleClass._id}`}>
                            <Section>
                                <img src={singleClass.image}/>
                                <article>
                                    <h1>{singleClass.subject}</h1>
                                    <h2>{singleClass.description}</h2>
                                </article>
                            </Section>
                        </Link>
                    )
                })}
            </Container>
        </>
    )
}