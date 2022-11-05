import styled from "styled-components";

export const FormChatContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  input {
    font-size: 24px;
  }

  textarea {
    height: 200px;
    padding: 15px;
  }
`;

export const ButtonSendChat = styled.button`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;

  width: 100%;
  max-width: 331px;
  height: 48px;

  border-radius: 8px;
  border: none;

  background: var(--color-primary);
  color: white;

  transition: 0.3s;

  align-self: end;

  &:hover {
    transition: 0.3s;
    border: 1px solid black;
  }
`;
