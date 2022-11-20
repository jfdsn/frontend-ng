import { InputContainer, InputText, IconContainer } from "./style";

type InputType = {
    leftIcon?: any;
    name?: string;
    placeholder: string;
}

export const Input = ({leftIcon, name, placeholder}: InputType) => {
    return (
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText placeholder={placeholder}/>
        </InputContainer>
    )
};