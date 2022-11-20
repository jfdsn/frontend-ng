import styled, { css } from "styled-components";

export const ButtonContainer = styled.button `
    background: #000;
    border: none;
    border-radius: 22px;
    position: relative;
   
    color: #fff;
    padding: 2px 12px;
    height: 30px;
    margin: 8px;
    min-width: 140px;
    width: 100%;


    &:hover {
        background-color: #565656;
        cursor: pointer;
    }


    ${({resource}) => resource !== "primary" && css `
        background: #b9b9b9;
        height: 20px;
        min-width: 120px;

        &:hover {
            background-color: #a8a8a8
            cursor: pointer;
        }
    `}
`