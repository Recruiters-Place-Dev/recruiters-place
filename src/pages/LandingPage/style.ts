import styled, { css } from "styled-components";

interface iPropsLine {
  degrau: string | undefined;
  top: string | undefined;
  right: string | undefined;
}

export const MainStyled = styled.main`
  /* border: 3px solid gold; */
  max-height: 100vh;
  height: 100vh;
  display: flex;

  overflow: hidden;
`;
export const Lines = styled.div<iPropsLine>`
  display: none;
  background-color: var(--color-primary);
  border-left: none;
  border-bottom: none;
  width: 400px;
  height: 8px;
  position: absolute;

  ${({ degrau, top, right }) => {
    return css`
      transform: rotate(${degrau}deg);
      top: ${top}px;
      right: ${right}px;
    `;
  }};

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
    /* align-items: center; */
  }
`;

export const ContainerImg = styled.div`
  /* mobile */

  display: none;

  background-color: var(--color-primary);

  width: 50%;
  height: 400px;
  align-items: center;
  justify-content: center;

  div {

    width: 300px;
    height: 200px;
    display: flex;
    justify-content: space-between;
  }
.animatedArea{
  width: 80px;
  height:  120px;
  position: relative;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
  .homemLandinPage,
  .mulherLandingPage {
    width: 90px;
    height:  190px;
    border: 1px solid red;
  }

  .setas {
    width: 50px;
  }
  @media (min-width: 1024px) {
    display: flex;
    width: 45%;
  }
`;

export const ContainerWelcome = styled.div`
  /* border: 2px solid green; */
  display: flex;
`;

export const ButtonLogout = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 116px 15px;
  width: 100%;
  max-width: 331px;
  height: 48px;
  background: #1da1f2;
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #fefefe;
  border: none;
  text-decoration: none;
  transition: 0.4s;
  z-index: 1000;
  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;

export const BackgroundStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 200px;
  width: 80%;
  max-width: 668px;
  background: #1da1f2;
  border-radius: 0px 200px 200px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
`;

export const ContainerRedirect = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 60%;
  margin: 0 auto;

  img {
    width: 300px;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    width: 70%;
    margin: 30px auto;
  }
`;

export const TitleBackground = styled.p`
  display: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 100%;
  color: var(--grey-1);

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SloganBackground = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 100%;
  color: var(--grey-1);

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const TextBackground = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #f5f8fa;
`;

export const TitleLogin = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 100%;
  color: #14171a;
`;

export const TitleAuth = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  margin-bottom: -1.8rem;
  color: #657786;
`;

export const TextAuth = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #657786;
`;
