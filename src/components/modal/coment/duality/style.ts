import styled from "styled-components";

export const ModalComentContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  background: rgba(5, 2, 6, 0.8);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  > div {
    position: absolute;
    max-width: 864px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    padding: 30px 0;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

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
  
      &:hover {
        transition: 0.3s;
        border: 1px solid black;
      }
  }
  
`;
