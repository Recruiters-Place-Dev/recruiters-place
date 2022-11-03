import styled from "styled-components";

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #1da1f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    width: 100%;
    display: flex;
    height: 100px;
    justify-content: space-around;
    align-items: center;

    & img {
      height: 60%;
    }

    & nav ul {
      display: flex;
      gap: 34px;
    }
  }
  & ul {
    display: flex;
    gap: 20px;
  }
`;
