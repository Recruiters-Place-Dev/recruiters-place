import styled from "styled-components";

export const RegisterForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 15px;

  max-width: 400px;
  width: 100%;

  .Recruiter-Opt {
    margin-bottom: 78px;
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;

    span {
      font-size: 20px;
    }
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 331px;
    height: 48px;

    background: #1da1f2;
    color: #fefefe;
    border-radius: 8px;
    border: none;

    padding: 14px 116px 15px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;

    text-decoration: none;
    transition: 0.4s;
    z-index: 1000;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }
`;
