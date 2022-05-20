import styled from "styled-components";

export const Header = styled.header`
    width: 100vw;
    height: 70px;
    background-color: #8f4aff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;

    p{
        font-family: 'Poppins', sans-serif;
        font-size: 30px;
        margin-right: 18px;
        color: white;
    }

    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 30px;
        margin-left: 18px;
        color: white;
    }
`