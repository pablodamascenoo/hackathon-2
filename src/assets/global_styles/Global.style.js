import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body{
        min-height: 100vh;
        width: 100%;
        font-family: 'Poppins', sans-serif;
    }
    .root{
        min-height: 100vh;
    }
    a{
        text-decoration: none;
    }
`;

export default GlobalStyles;
