import styled from "styled-components";

export const MainLogin = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to right,
    var(--color-secondary) 50%,
    var(--color-secondary) 50%
  );

  @media (min-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-end;

    background: linear-gradient(
      to right,
      var(--color-primary) 40%,
      var(--color-secondary) 40%
    );
  }

  .boxAnimated {
    position: fixed;
    left: 100px;
    top: 50px;
    width: 400px;
    height: 300px;

    display: none;
    align-items: center;
  }

  .HomemLogin {
    width: 300px;
    height: 300px;
  }
  .ImgLogin {
    position: absolute;
    left: -60px;
    top: 100px;
    width: 200px;
    height: 150px;
  }
  .line1 {
    position: absolute;
    left: -50px;
    top: 199px;
    width: 0px;
    height: 3px;
    z-index: 100;
    background-color: var(--color-primary);
    animation: animateLine1 2s ease forwards;
  }
  .line2 {
    position: absolute;
    left: -50px;
    top: 165px;
    /* width: 100px; */
    height: 3px;
    z-index: 100;
    background-color: var(--color-primary);
    animation: animateLine2 2s ease forwards;
  }
  @keyframes animateLine1 {
    from {
      width: 0px;
    }
    /* 50% {
      width: 80px;
    }
    90%{
      width: 150px;
    } */
    to {
      width: 100px;
    }
  }

  @keyframes animateLine2 {
    from {
      width: 0px;
    }
    /* 50% {
      width: 80px;
    }
    90%{
      width: 150px;
    } */
    to {
      width: 150px;
    }
  }

  @media (min-width: 1024px) {
    .boxAnimated {
      position: fixed;
      left: 100px;
      top: 70px;
      width: 400px;
      height: 300px;

      display: flex;
      align-items: center;
    }
  }
  @media (min-width: 1300px) {
    .boxAnimated {
      position: fixed;
      left: 200px;
    }
  }
`;

export const SectionLogin = styled.section`
  /* border: 1px solid red; */
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 60%;
  /* height: 100vh; */

  @media (min-width: 1024px) {
    margin: 0;
  }

  .block {
    position: absolute;

    transform: rotate(20deg);

    top: 15px;
    right: 80px;

    width: 200px;
    height: 500px;

    border-top: 5px solid;
    border-right: 5px solid;
    border-top-color: var(--color-primary);
    border-right-color: var(--color-primary);

    z-index: 0;
  }

  .containerLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    min-width: 250px;
    max-width: 90%;
    height: 500px;

    .boxLogo {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 300px;

      margin: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: white;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export const FormLogin = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  z-index: 1;

  h3 {
    margin: 0 0 15px 0;

    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 100%;
    color: #14171a;

    font-family: var(--font-family);
  }
  /* 
  button {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;

    width: 100%;
    /* max-width: 331px; */
  /* height: 48px;

    border-radius: 8px;
    border: none;

    background: var(--color-primary);
    color: white;

    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      transition: 0.3s; */
  /* border: 1px solid black; */
  /* }
  }  */

  span {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #657786;

    margin: 18px 0;
  }
`;

export const BoxSlogan = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-width: 250px;

  max-width: 750px;
  height: 240px;

  @media (min-width: 1024px) {
    position: absolute;
    bottom: 70px;
    align-self: center;
    padding: 10px;
    background: var(--color-secondary);

    border: 1px solid var(--grey-3);
    border-radius: 0.5rem;

    div {
      position: unset;
      bottom: 0;
      left: 0;
      height: 200px;
      width: 70%;
      max-width: 668px;
      background: #1da1f2;
      border-radius: 0px 200px 200px 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 2rem;
      padding: 2rem;
      margin-top: 0;

      p {
        /* display: none; */
      }
    }
  }
`;
