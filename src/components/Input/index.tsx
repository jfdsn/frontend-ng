import { InputContainer, InputText, IconContainer } from "./style";

type InputType = {
    leftIcon?: any;
    placeholder: string;
}

export const Input = ({leftIcon, placeholder}: InputType) => {
    return (
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText placeholder={placeholder}/>
        </InputContainer>
    )
};