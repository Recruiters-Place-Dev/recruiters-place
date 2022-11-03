import styled from "styled-components";

export const ParagraphError = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;

  width: 95%;

  color: var(--message-error);

  font-size: 13px;
  font-family: var(--font-family);

  margin: 3px 0 15px 0;

  svg {
    position: static;
  }
`;
