import styled from "styled-components";

export const MainLogin = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to right,
    var(--color-secondary) 50%,
    var(--color-secondary) 50%
  );
  @media (min-width: 985px) {
    background: linear-gradient(
      to right,
      var(--color-primary) 50%,
      var(--color-secondary) 50%
    );
  }
`;

export const SectionLogin = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: 100vh;

  @media (min-width: 985px) {
    align-items: flex-end;
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
    justify-content: flex-start;

    min-width: 250px;
    max-width: 80%;
    height: 500px;

    .boxLogo {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 150px;
      height: 100px;

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

    font-weight: 500;
    font-family: var(--font-family);
  }

  button {
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
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      transition: 0.3s;
      border: 1px solid black;
    }
  }

  span {
    font-family: var(--font-family);
    font-weight: 300;
    letter-spacing: -0.4px;
    font-size: 11px;

    color: grey;

    margin: 15px 0 3px 0;
  }
`;

export const BoxSlogan = styled.div`
  position: absolute;

  bottom: 0.2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 65%;
  min-width: 250px;
  max-width: 600px;
  height: 180px;

  background: var(--color-secondary);

  border: 1px solid var(--grey-3);
  border-radius: 0.5rem;

  .blockBlue {
    width: 55%;
    height: 88%;

    background: var(--color-primary);
    border-radius: 0 200px 200px 0;

    margin-left: 1rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    width: 250px;
    margin-left: 10px;

    h2 {
      font-family: var(--font-family);
      font-weight: 500;
      text-align: center;
      font-size: 16px;
      width: 90%;
      @media (min-width: 985px) {
        font-size: 21px;
      }
    }

    a {
      color: var(--color-primary);
    }
    .boxLink {
      font-family: var(--font-family);
      font-size: 12px;

      .spanBorder {
        display: block;
        width: 0%;
        height: 1px;
        background: var(--color-primary);

        transition: 0.4s;
      }

      &:hover .spanBorder {
        width: 88%;
        transition: 0.4s;
      }
    }
  }
`;
