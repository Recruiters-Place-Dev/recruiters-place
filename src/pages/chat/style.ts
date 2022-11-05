import styled from "styled-components";

export const ContainerChat = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 84vh;
  ul {
    border-right: 1px solid black;
    width: 25%;
    li {
      padding: 10px;
    }
  }
  h1 {
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      background: #ccc;
    }
  }
`;
export const ContainerChatAll = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 50%;
  border-right: 1px solid black;
  padding: 5px;
  gap: 10px;
`;
export const ContainerChatCall = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: max-content;
  overflow-y: auto;
  & > .alignRigth {
    width: fit-content;
    align-self: end;
    background: blue;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 50%;
  }
  & > .alignLeft {
    width: fit-content;
    align-self: start;
    background: green;
    width: 50%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const ContainerChatPerfil = styled.div`
  width: 25%;
`;

export const ContainerInputSend = styled.form`
  display: flex;
  justify-content: end;
  img {
    width: 40px;
  }
  input {
    display: flex;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 5px;
  }
`;
