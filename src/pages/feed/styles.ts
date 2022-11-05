import styled from "styled-components";
import { motion } from 'framer-motion';

export const ContainerFeed = styled.div`
  max-width: 1050px;
  width: 80%;
  margin: 0 auto;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerDeveloper = styled(motion.div)`
  width: 90%;
  margin: 10px auto;
  border: 2px solid #1da1f2;
  border-radius: 10px;
  display: flex;
  padding: 10px;
`;

export const DeveloperName = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 100%;
  color: #14171a;
`;
export const DevelopersCargo = styled.p`
  color: #657786;
  font-size: 22px;
  font-family: "Roboto";
`;

export const Figure = styled.figure`
  width: 100px;
  height: 100px;
`;

export const DivDevelopersInfo = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const DivDevelopersName = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const DivDevelopersLinks = styled.div`
  width: 70%;
  display: flex;
  gap: 10px;
  color: #657786;
  font-size: 18px;
  & a {
    text-decoration: none;
  }
`;

export const DivDevelopersTech = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Techs = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  gap: 5px;
  & div{
    width: 10px;
    height: 10px;
    & img {
    min-width: 35px;
    min-height: 35px;
    aspect-ratio: 1/1;
  }
  }
`;
export const Contato = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;

  & img {
    cursor: pointer;
  }
`;
