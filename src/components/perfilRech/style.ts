import styled, { css } from "styled-components";

export interface iSizeProps {
  size?: string;
}

export const ContainerMain = styled.main`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 1100px;
  height: fit-content;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const Container = styled.div<iSizeProps>`
  display: flex;
  align-items: center;

  width: 800px;
  max-width: 90%;

  margin-top: 2rem;

  border: 2px solid var(--color-primary);
  border-radius: 1rem;
  background: #f5f8fa;

  ${({ size }) => {
    switch (size) {
      case "big":
        return css`
          justify-content: center;
          height: 300px;
        `;

      case "small":
        return css`
          position: relative;
          justify-content: space-between;

          height: 150px;

          & > svg {
            position: absolute;
            top: 1.3rem;
            right: 1.3rem;
          }
        `;

      default:
        return false;
    }
  }}
`;

export const ContainerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  margin-left: 1rem;

  width: 25%;
  height: 90%;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50%;
    width: 100%;

    svg {
      max-height: 100%;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    width: 100%;
    height: 50%;

    word-wrap: break-word;

    p {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 13px;
      text-align: center;

      width: 100%;
    }

    p + p {
      text-decoration: underline;
    }
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  width: 57%;
  height: 90%;

  margin-right: 3rem;

  h2 {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
  }

  p {
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 16px;
  }

  a {
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 16px;

    color: var(--grey-1);
  }
`;

export const FormEditRech = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;

  overflow-y: auto;

  width: 100%;
  height: 90%;

  .box-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    width: 50%;
    height: 30px;
  }

  div {
    width: 45%;
    min-width: 215px;
    padding-top: 0.5rem;
  }

  input {
    width: 100%;
    height: 40px;
  }

  /* input:focus ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: #f5f8fa;
    padding: 0 0.2em;
  } */
`;
