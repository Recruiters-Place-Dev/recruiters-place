import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerFormContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30%;
  textarea {
    height: 100px;
  }
`;
