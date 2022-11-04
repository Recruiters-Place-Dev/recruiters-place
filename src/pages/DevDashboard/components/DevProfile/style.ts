import { Link } from "react-router-dom";
import styled from "styled-components";



export const SectionProfile = styled.section`
  width: 60%;
  background: #f5f8fa;
  border: 2px solid #1da1f2;
  border-radius: 15px;
  max-width: 750px;
  position: relative;
  min-height: 556px;
  height: auto;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 4fr 1fr;
`;

export const LinkEdit = styled(Link)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`

export const ListTech = styled.ul`
  display: flex;
  grid-column: 2/3;
  grid-row: 3;
  gap: 0.6rem;
  li img {
    width: 50px;
  }
`;

export const NavLink = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
`;

export const BioBox = styled.div`
  grid-row: 2/3;
  grid-template-columns: 2/3;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #14171a;
    text-align: justify;
  }
`;

export const DevInfoBox = styled.div`
  grid-column: 1/1;
  grid-row: 1/3;

  div{
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

export const NameAndWordBox = styled.div`
  grid-row: 1;
  grid-column: 2/3;
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
