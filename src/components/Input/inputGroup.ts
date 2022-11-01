import { ReactNode } from "react";
import styled from "styled-components";

interface iInputGroup {
    className: ReactNode;
    inputValue: string;
}

const InputGroup = styled.div<iInputGroup>`
    position: relative;

    input {
        width: 400px;
        border: 1px solid ${props => props.className === "error" ? "#E2142D" : props.className === "sucess" ? "#4BAD31" : props.className === "done" ? "#1DA1F2" : "#14171A"};
        border-radius: 8px;
        background: none;
        color: ${props => props.className === "sucess" ? "#4BAD31" : props.className === "done" ? "#1DA1F2" : "#14171A"};
        padding: 17px 14px;
        font-size: 16px;
        transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    label {
        position: absolute;
        left: 16px;
        pointer-events: none;
        color: ${props => props.className === "error" ? "#E2142D" : props.className === "sucess" ? "#4BAD31" : props.className === "done" ? "#1DA1F2" : "#14171A"};;
        transform: translateY(1rem);
        transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    input:focus {
        outline: none;
    }

    input:focus ~ label {
        transform: translateY(-50%) scale(0.8);
        background-color: #fff;
        padding: 0 0.2em;
    }
`

export default InputGroup