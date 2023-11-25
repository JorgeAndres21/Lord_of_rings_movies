import styled from "styled-components";

export const Body = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Main = styled.main`
    margin-top: 32px;

    display: grid;
    grid-template-columns: repeat(4,.1fr);
    gap: 16px;
`