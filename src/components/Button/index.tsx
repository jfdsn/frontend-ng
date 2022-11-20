import { type } from "os";
import { ButtonContainer } from "./style";

type ButtonType = {
    variant?: string;
    title: string;
    onClick?: any;
    type?: "button" | "submit" | "reset";
};

export const Button = ({ variant="primary", title, onClick, type }: ButtonType) : JSX.Element => {
    return (
        <ButtonContainer resource={variant} type={type} onClick={onClick} title={title}>
            {title}
        </ButtonContainer>
    )
};