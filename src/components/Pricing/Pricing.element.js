import styled from "styled-components";

export const PricingSection = styled.div`
  padding: 140px 0 ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;


  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
`;

export const PricingText = styled.p`
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  padding: 30px 150px;

  @media screen and (max-width:768px){
    padding: 20px 10px;
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled.div`
  background: #101522;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  color: #fff;
  padding: 3rem;
  margin: 10px;
  width: 280px;
  height: 500px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  flex-direction: column;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    background-color: #020202;
  }
`;

export const PricingIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
  color: #4b59f7;
`;

export const PricingCardPlan = styled.h3`
text-align: center;
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.p``;
