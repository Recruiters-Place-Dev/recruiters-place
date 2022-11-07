import styled from "styled-components";

export const ModalFeedContainer = styled.div`
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

    @media (max-height: 690px) {
      max-width: 768px;
      height: 500px;
    }
  }
`;
export const DeveloperName = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 100%;
  color: #14171a;
`;
export const DevelopersCargo = styled.h2`
  color: #657786;
  font-size: 22px;
  font-weight: 500;
  font-family: "Roboto";
`;

export const FigureModal = styled.figure`
  width: 100px;
  height: 100px;
`;

export const DivInfoEmail = styled.figure`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivLinks = styled.figure`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  align-self: start;
  a {
    font-size: 20px;
    color: #657786;
  }
`;

export const DivPersonalInfo = styled.div`
  width: 25%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export const DivInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DivBio = styled.div`
  width: 100%;
  height: 660px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  color: #14171a;
  font-size: 20px;
  font-family: "Roboto";

  p {
    font-weight: 400;
    width: 100%;
    height: 200px;
    word-break: break-all;
  }
`;

export const Techs = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  gap: 5px;
  justify-self: flex-end;
  justify-content: flex-start;
  flex-wrap: wrap;

  img {
    width: 70px;
    height: 70px;
  }
`;
