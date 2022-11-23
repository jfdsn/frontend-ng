import styled from "styled-components";

export const Wrapper = styled.main `
    width: 100%;
    max-width 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aling-items: center;

`

export const Container = styled.div `
    width: 100%;
    max-width 80%;
    margin: 0 auto;
    margin-bottom: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    aling-items: center;

    @media screen and (max-width: 1060px) {
        flex-direction: column;
    }
`
export const ContainerTable = styled.div `
    width: 100%;
    max-width 80%;
    margin: 0 auto;
    margin-bottom: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aling-items: center;
`

export const WrapperInput = styled.div `
    max-width: 300px;

    @media screen and (max-width: 1060px) {
        padding-top: 40px;
    }
`

export const Msg = styled.div `
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 300px;
    margin-top: 20px;
    line-height: 22px;

    color: #e88800;
`

export const Title = styled.h2 `
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 400px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`

export const Text = styled.p `
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 400px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #fff;
`

export const Column = styled.div `
    @media screen and (max-width: 1060px) {
        max-width: 400px;
    }
`

export const Form = styled.form `
    width: 100%;
    max-width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    aling-items: center;

    @media screen and (max-width: 1060px) {
        flex-direction: column;
        max-width: 220px;
    }
`

export const WrapperChkBox = styled.div `
    width: 100%;
    max-width: 100px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-items: center;
    text-align: center;
` 
