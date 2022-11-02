import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #1da1f2;

  & img {
    height: 60%;
  }

  & nav ul {
    display: flex;
    gap: 34px;
  }
`;
