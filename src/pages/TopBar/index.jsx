import { useEffect, useState } from "react"
import axios from "axios"

import { Header } from "./styles"

export default function TopBar(){
    const [userName, setUserName] = useState("");

    //CONSERTAR O GET COM O LINK
    /*useEffect(() => {
        const request = axios.get("");
        request.then(res => {
            console.log(res.data);
            setUserName(res.data.name)
        })
    }, []);*/

    return(
        <Header>
            <h1>Escola online</h1>
            <p>userName</p>
        </Header>
    )
}