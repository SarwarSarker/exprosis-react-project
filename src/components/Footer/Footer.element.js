import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGitkraken } from "react-icons/fa";

export const FooterSection = styled.div`
  background: #101522;
  padding: 100px 120px 120px 120px;

  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px 12px 12px 12px;
    padding-bottom: 15px;
  }
`;

export const FooterHeader = styled.div`
  width: 20%;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-bottom: 40px;
  }
`;

export const FooterIcon = styled(FaGitkraken)`
  margin-right: 0.5rem;
`;

export const FooterHeadTitle = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const FooterHeadText = styled.p`
  color: #a9b3c1;
  margin: 16px 0;
`;

export const FooterSocial = styled.div`
  display: flex;
`;

export const FooterSocialIcon = styled.div`
margin-right: 10px;
display: inline-block;
text-align: center;
font-size: 14px;
width: 40px;
height: 40px;
line-height: 40px;
border-radius: 50%;
transition: 0.3s;
background: #102339;
color: #a1a4a9;

&:hover{
    background: #4b59f7;
}
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 80%;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    width: 100%;
  }
`;

export const FooterLinkItems = styled.ul`
  list-style: none;
`;

export const FooterLinkTitle = styled.h3`
  color: #fff;
  font-size: 24px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;
