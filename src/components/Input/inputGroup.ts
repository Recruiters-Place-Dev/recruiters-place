import styled, { css } from "styled-components";
import { iClassName } from ".";

interface iInputGroup {
  className: iClassName;
}

const validateClassName = (className: iClassName) => {
  switch (className) {
    case "error":
      return css`
        input {
          border: 1px solid var(--color-error);
          color: var(--color-error);
        }

        label {
          color: var(--color-error);
        }
      `;
    case "success":
      return css`
        input {
          border: 1px solid var(--color-success);
          color: var(--color-success);
        }

        label {
          color: var(--color-success);
        }
      `;
    case "done":
      return css`
        input {
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
        }

        label {
          color: var(--color-primary);
        }
      `;
    default:
      return css`
        input {
          border: 1px solid #14171a;
          color: #14171a;
        }

        label {
          color: #14171a;
        }
      `;
  }
};

const InputGroup = styled.div<iInputGroup>`
  position: relative;
  max-width: 100%;

  ${({ className }) => validateClassName(className)}

  input {
    width: 400px;
    max-width: 100%;

    /* border: 1px solid
      ${(props) =>
      props.className === "error"
        ? "#E2142D"
        : props.className === "success"
        ? "#4BAD31"
        : props.className === "done"
        ? "#1DA1F2"
        : "#14171A"}; */

    /* color: ${(props) =>
      props.className === "success"
        ? "#4BAD31"
        : props.className === "done"
        ? "#1DA1F2"
        : "#14171A"}; */

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

    /* color: ${(props) =>
      props.className === "error"
        ? "#E2142D"
        : props.className === "success"
        ? "#4BAD31"
        : props.className === "done"
        ? "#1DA1F2"
        : "#14171A"}; */

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
`;

export default InputGroup;
