import { InputContainer, InputText, IconContainer } from "./style";

type InputType = {
    leftIcon?: any;
    placeholder: string;
    onChange?: any;
    type?: "text" | "password" | "number" | "date";
    pattern?: string;
    min?: string;
    step?: string;
    checked?: boolean
}

export const Input = ({ leftIcon, placeholder, onChange, type, min, step, checked }: InputType) => {
    return (
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText min={min} step={step} checked={checked}
                type={type} placeholder={placeholder} onChange={onChange} />
        </InputContainer>
    )
};