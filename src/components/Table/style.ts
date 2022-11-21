import styled from "styled-components";


export const Tb = styled.table `
    font-family: "Open Sans";
    border-collapse: collapse;
    width: 100%;
`

export const Td = styled.td `
    border: 1px solid #ddd;
    padding: 8px;
`

export const Th = styled.th `
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #000;
    color: #fff;
    width: 100%;
`

export const Tr = styled.tr `
    :nth-child(even){
        background-color: #565656;
    }
`
