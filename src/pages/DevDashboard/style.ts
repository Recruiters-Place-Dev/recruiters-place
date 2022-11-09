import { Link } from "react-router-dom";
import styled from "styled-components";
export const DivPhoto = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;

  border-radius: 30%;

  @media (max-width: 750px) {
    grid-row: 1/2;
    grid-column: 1/3;
  }
`;
export const DivInfoDev = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;

  @media (max-width: 750px) {
    grid-row: 2/3;
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
export const SectionProfile = styled.section`
  background: #f5f8fa;
  border: 2px solid #1da1f2;
  border-radius: 15px;
  max-width: 900px;
  position: relative;
  min-height: 556px;
  height: auto;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  margin: 2rem auto;
  height: auto;

  @media (max-width: 750px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr 0.6fr auto 0.5fr;
    margin: 0 0.6rem;
    margin-top: 10rem;
  }
`;

export const LinkEdit = styled(Link)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;

export const ListTech = styled.ul`
  display: flex;
  grid-column: 2/3;
  grid-row: 3;
  grid-row: 4/5;
  gap: 0.6rem;
  li img {
    width: 50px;
    min-width: 50px;
  }

  @media (max-width: 750px) {
    grid-row: 5/6;
    grid-column: 1/3;
    flex-wrap: wrap;
  }
`;

export const NavLink = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  grid-column: 1/2;
  grid-row: 3/4;
  a {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #657786;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    grid-row: 2/3;
    grid-column: 2/3;
  }
  @media (max-width: 500px) {
    padding-left: 1rem;
  }
  @media (max-width: 380px) {
    padding-left: 2rem;
  }
`;

export const BioBox = styled.div`
  grid-row: 2/4;
  grid-template-columns: 2/3;
  width: 100%;
  max-width: 400px;
  height: 100%;
  text-align: justify;
  display: flex;
  flex-wrap: wrap;
  white-space: normal;

  @media (max-width: 750px) {
    grid-row: 4/5;
    grid-column: 1/3;
  }
`;

export const Bio = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: #14171a;
  display: flex;
  align-items: flex-start;
`;

export const EmptyBio = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: flex-start;
  color: #e95814;
`;

export const NameAndWordBox = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;

  @media (max-width: 750px) {
    grid-row: 3/4;
    grid-column: 1/3;
  }
`;

export const TitleName = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  display: flex;
  align-items: center;
  color: #14171a;
`;

export const TextWork = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #657786;
`;

export const TextInfoDev = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #14171a;
`;
