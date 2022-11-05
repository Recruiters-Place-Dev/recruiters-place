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
export const ContainerChatCall = styled.div`
  width: 50%;
  border-right: 1px solid black;
`;
