import styled from "styled-components";

const RegisterContainer = styled.div`
  position: relative;
  font-family: "Roboto", sans-serif;
  width: 100%;
  min-height: 100vh;
  display: grid;
  align-items: center;
  grid-template-columns: 45% 55%;
  grid-template-areas: "fc cc";

  @media (max-height: 940px) {
    padding: 5% 0;
  }

  .FormContainer {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    grid-area: fc;
    z-index: 2;

    h2 {
      margin-bottom: 39px;
      font-weight: 500;
      font-size: 30px;
    }
  }

  .ContentContainer {
    grid-area: cc;
  }

  .InputsContainer {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    gap: 39px;
  }

  .BackToLogin {
    max-width: 400px;
    width: 100%;
    margin-top: 37px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 54px;
  }

  .square {
    width: 620px;
    height: 380px;
    background-color: var(--color-primary);
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .SquareContent {
    width: 840px;
    height: 540px;
    background-color: var(--color-primary);
    position: absolute;
    top: 0;
    right: 3%;

    img {
      position: absolute;
      top: 20px;
      left: 0;
    }

    > div {
      position: absolute;
      top: 20px;
      right: 0;
      max-width: 306px;

      h3 {
        font-size: 48px;
        color: #f5f8fa;
      }

      a {
        font-size: 28px;
        color: #f5f8fa;
      }
    }
  }

  .halfSquare {
    position: absolute;

    transform: rotate(20deg);

    top: 70px;
    left: -200px;

    width: 300px;
    height: 600px;

    border-top: 5px solid;
    border-right: 5px solid;
    border-top-color: var(--color-primary);
    border-right-color: var(--color-primary);

    z-index: 1;
  }
`;

export default RegisterContainer;
