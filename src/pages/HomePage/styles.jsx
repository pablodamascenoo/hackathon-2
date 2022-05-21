import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fefefe;
`

export const Section = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    article {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        padding: 30px;
        font-family: 'Poppins', sans-serif;
    }

    h1 {
        font-size: 20px;
        color: #3c147c;
    }

    h2 {
        font-size: 16px;
    }

    img {
        width: 150px;
        height: 150px;
        border-radius: 300px;
    }
`