import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainStyled = styled.main`
  max-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;
export const Lines = styled.div`
  border: solid 10px #1da1f2;
  border-left: none;
  border-bottom: none;
  width: 90vh;
  height: 95vh;
  right: -20%;
  position: absolute;
  transform: rotate(16deg);

  @media (min-width: 465px) {
    transform: rotate(20deg);
  }
  @media (min-width: 550px) {
    transform: rotate(22deg);
  }
  @media (min-width: 667px) {
    transform: rotate(30deg);
  }

  @media (min-width: 867px) {
    right: -5%;
    transform: rotate(20deg);
  }
  @media (min-width: 1250px) {
    right: 14%;
    transform: rotate(20deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  height: 100%;
  min-width: 100vw;
  img {
    max-width: 300px;
    object-fit: cover;
  }

  @media (min-width: 988px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    gap: 4rem;
  }
`;

export const ContainerImg = styled.div`
  display: none;

  @media (min-width: 988px) {
    display: block;
    position: relative;

    img {
      position: absolute;
      min-width: 400px;
      transform: translateY(-50px);
      left: -6rem;
      
    }
  }
`;

export const BackgroundStyled = styled.div`
  width: 90%;
  max-width: 800px;
  min-height: 230px;
  background: #1da1f2;
  border-radius: 0px 200px 200px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem;
  padding-right: 0.4rem;
`;

export const ContainerRedirect = styled.div`

  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  height: 100%;
  max-height: 700px;
  img {
    width: 80%;
    object-fit: cover;
  }

  @media (min-width: 988px) {
   
    margin: 0;
   


  }
`;

export const LinkStyled = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 116px 15px;
  width: 100%;
  max-width: 331px;
  height: 48px;
  background: #1da1f2;
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #fefefe;
  border: none;
  text-decoration: none;
  transition: 0.4s;
  z-index: 1000;
  &:hover{
    cursor: pointer;
    filter: brightness(1.2);
  }
`;

export const TitleBackground = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 100%;
  color: #14171a;
`;

export const TextBackground = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: #f5f8fa;
`;

export const TitleLogin = styled.h4`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 100%;
  color: #14171a;
`;

export const TextAuth = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #657786;
`;
