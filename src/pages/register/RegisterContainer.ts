import styled from "styled-components";

const RegisterContainer = styled.div`
  position: relative;
  font-family: "Roboto", sans-serif;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* grid-template-columns: 100%; */
  /* grid-template-areas: "fc"; */

  @media (min-width: 900px) {
    align-items: center;
    justify-content: flex-start;
  }

  .FormContainer {
    /* border: 1px solid red; */
    /* margin: 0 auto; */
    width: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 300px;
    }
    @media (min-width: 900px) {
      width: 50%;
    }

    @media (min-width: 1024px) {
      width: 40%;
    }
  }

  .ContentContainer {
    /* grid-area: cc; */
  }

  .InputsContainer {
    display: flex;
    flex-flow: column;
    /* width: 100%; */
    gap: 39px;
  }

  .BackToLogin {
    max-width: 400px;
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 20px;
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
    width: 50%;
    height: 450px;
    background-color: var(--color-primary);
    position: absolute;
    top: 0;
    right: 3%;
    display: none;

    @media (min-width: 900px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
      /* position: absolute;
      top: 20px;
      left: 0; */

      width: 500px;
      height: 250px;
    }

    > div {
      margin: 20px;

      h3 {
        font-size: 40px;
        color: var(--grey-1);
      }

      a {
        font-size: 20px;
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
