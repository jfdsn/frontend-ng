import styled from "styled-components";


export const Container = styled.div `
    width: 100%;
    max-width: 220px;
    height: 30px;
    border-bottom: 1px solid #fff;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const Text = styled.p `
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 220px;
    margin-bottom: 8px;
    line-height: 22px;

    color: #fff;
`

export const HideButton = styled.button `
    background: #000;
    border: none;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding-top: 2px;
    height: 20px;
    margin: 8px;
    width: 100%;
    max-width: 30px;

    &:hover {
        background-color: #565656;
        cursor: pointer;
    }
`