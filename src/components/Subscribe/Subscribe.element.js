import styled from "styled-components";

export const SubSection = styled.div`
  background: #172541;
  color: #fff;
  padding: 50px 0 60px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;\
    text-align: center;
    padding: 40px;
  }
`;

export const SubHeading = styled.h1`
  font-size: 40px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
