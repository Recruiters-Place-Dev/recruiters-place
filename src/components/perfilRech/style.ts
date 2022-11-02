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
  height: 84vh;
`;

export const Container = styled.div<iSizeProps>`
  display: flex;
  align-items: center;

  width: 800px;

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

    p {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 13px;
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

  width: 65%;
  height: 90%;

  h2 {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 22px;
  }

  p {
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 16px;
  }
`;
