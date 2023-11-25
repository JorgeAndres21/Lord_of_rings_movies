import styled from "styled-components";


export const CardStyle = styled.div`
    height: 448px;
    width: 300px;

    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px rgba(12, 25, 50, 0.12);
`

export const DivFoto = styled.div`
    width: 100%;
    height: 50%;

    background-color: #ABBBCC;

    border-radius: 10px 10px 0px 0px;

    display: flex;
    justify-content: center;
    align-items: center;

`
export const DivInfo = styled.div`
    padding: 5px 0 16px 16px;

    font-size: 15px;
    color: rgba(12, 25, 50, 0.80);

    h2 , h3 {
        color: #000;
    }

    .pfoto {
        margin-top: 20px;
    }

    .pflex {
        margin-top: 20px;

        max-width: 80%;
      
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`