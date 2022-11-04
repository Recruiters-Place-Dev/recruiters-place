import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #1da1f2;
  background: #f5f8fa;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  img {
    min-height: 80px;
  }
`;

export const ButtonLogout = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1da1f2;
  background: none;
`;
