import styled from "styled-components";

export const ContainerChat = styled.div`
  font-family: var(--font-family);
  font-weight: 500;

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
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      background: #ccc;
    }
    img {
      width: 50px;
    }
  }
  @media screen and (max-width: 750px) {
    ul li p {
      display: none;
    }
    & ul li h1 {
      justify-content: center;
    }
  }
`;
export const ContainerChatAll = styled.div`
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 70px;

    @media screen and (min-width: 1000px) {
      display: none;
    }
  }
  display: flex;
  flex-direction: column;
  width: 50%;
  border-right: 1px solid black;
  padding: 5px;
  gap: 10px;
  @media screen and (max-width: 1000px) {
    width: 75%;
  }
`;
export const ContainerChatCall = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: max-content;
  overflow-y: auto;
  h2 {
    padding: 5px;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  img {
    width: 100px;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
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
