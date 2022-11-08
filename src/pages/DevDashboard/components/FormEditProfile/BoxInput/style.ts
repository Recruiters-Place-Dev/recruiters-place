import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export const BoxInput = styled.div`
  position: relative;
  width: 100%;
  
  input {
    width: 100%;
    max-width: 550px;
    
    border-radius: 8px;
    background: none;
    padding: 17px 14px;
    font-size: 16px;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  label {
    position: absolute;
    left: 16px;
    pointer-events: none;

    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  input:focus,
  input:valid {
    outline: none;
  }

  input:focus ~ label,
  input:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: #f5f8fa;
    padding: 0 0.2em;
  }

 
  input {
    border: 1px solid #14171a;
    color: #14171a;
  }

  label {
    color: #14171a;
  }
`;

