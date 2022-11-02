import styled from "styled-components";

const RegisterContainer = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  min-height: 100vh;
  display: grid;
  align-items: center;
  grid-template-columns: 40% 60%;
  grid-template-areas: "fc cc";

  .FormContainer {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    grid-area: fc;

    h2 {
        margin-bottom: 39px;
        font-weight: 500;
        font-size: 30px;
    }
  }

  .ContentContainer {
    grid-area: cc;
  }

  .Recruiter-Opt {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
  }

  .InputsContainer {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    gap: 39px;
  }

  .BackToLogin {
    display: flex;
    flex-flow: column nowrap;
    
  }
`;

export default RegisterContainer;
