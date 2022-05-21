import { Header } from "./styles";

export default function TopBar({ user }) {
    //CONSERTAR O GET COM O LINK
    /*useEffect(() => {
        const request = axios.get("");
        request.then(res => {
            console.log(res.data);
            setUserName(res.data.name)
        })
    }, []);*/

    return (
        <Header>
            <h1>Escola online</h1>
            <p>{user}</p>
        </Header>
    );
}
