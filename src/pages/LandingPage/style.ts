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
  /* border: 1px solid red; */
  width: 100%;
  height: 60%;
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

  .animatedArea {
    width: 80px;
    height: 120px;
    position: relative;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .homemLandinPage,
  .mulherLandingPage {
    width: 90px;
    height: 190px;
    /* border: 1px solid red; */
  }
  .homemAnimation {
    /* border: 1px solid red; */
    position: absolute;
    top: -30px;
    left: -30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 8px;
    width: 90%;
  }
  .line1,
  .line2,
  .line3 {
    width: 100%;
    height: 6px;
    background-color: var(--grey-5);
    z-index: 2;
    border-radius: 50px;
  }
  .bola {
    background-color: var(--grey-5);
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .line1,
  .line3 {
    animation: moveLine1 1s infinite;
  }

  .line2 {
    animation: moveLine2 1s infinite;
  }
  .setas {
    width: 50px;
    position: absolute;
    right: 0;
    bottom: 10px;
  }

  .mulherAnimation {
    position: absolute;
    bottom: -180px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 8px;
    width: 90%;
  }

  @keyframes moveLine1 {
    from {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-2px);
    }
    to {
      transform: translateY(3px);
    }
  }
  @keyframes moveLine2 {
    from {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-2px);
    }
    to {
      transform: translateX(2px);
    }
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

export const ContainerRedirect = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 70%;
  margin: 0 auto;

  img {
    width: 300px;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    width: 70%;
    margin: 20px auto;
  }
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
  /* margin-bottom: -1.8rem; */
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
