import styled from "styled-components";

export const ModalComentWriteContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(5, 2, 6, 0.8);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  > div {
    position: absolute;
    max-width: 864px;
    width: 100%;
    z-index: 11;
    height: 600px;
    margin: 0 auto;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
    & div {
     
  }
`;
export const ModalComentWriteContainerButton = styled.div`
  align-self: end;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;
export const ModalComentWriteContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-self: start;
  width: 100%;
  height: 45%;
`;
