import styled from "styled-components";

export const HeaderLogo = styled.div`
    width: 100%;
    height: 56px;

    padding: 0 18px;
    
    background-color: #4C16C9;
    color: #fff;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const HeaderText = styled.div`
    width: 100%;
    max-width: 1008px;

    margin-top: 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-bottom: 1px solid #D8E1EB;
    padding-bottom: 32px;
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 10px;

    input {
        width: 190px;
        height: 30px;

        padding: 11px 7px;

        border: 1px solid  #C5D2E0;
        border-radius: 2px;
    }
`