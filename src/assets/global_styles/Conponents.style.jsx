import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
        !props.color ? "transparent" : props.color};
`;

export { Container };
