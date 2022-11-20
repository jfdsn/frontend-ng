import styled from "styled-components";

export const InputContainer = styled.div `
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #fff;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div `
    margin-right: 10px;
`

export const InputText = styled.input `
    background-color: transparent;
    color: #fff;
    border: none;
    height: 30px;
    width: 100%;
    max-width: 80%;

    :focus {
        box-shadow: 0;
        outline: 0;
    }
`