import React from "react";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingText,
  PricingContainer,
  PricingCard,
  PricingIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.element";
import { Button } from "../../globalStyles";
import { FaCriticalRole, FaDeviantart, FaHornbill } from "react-icons/fa";

const Pricing = () => {
  return (
    <>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingText>
            From IT solutions and startup to Creative services and on securities
            distribution, we dedicated business services them the teams serve
            all major sectors. of the industry.
          </PricingText>
          <PricingContainer>
            <PricingCard>
              <PricingIcon>
                <FaCriticalRole />
              </PricingIcon>
              <PricingCardPlan>Business service Consultation</PricingCardPlan>
              <PricingCardCost>$99.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>100 New User</PricingCardFeature>
                <PricingCardFeature>$50,00 Budget</PricingCardFeature>
                <PricingCardFeature>Retargeting Analysis</PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCard>
            <PricingCard>
              <PricingIcon>
                <FaDeviantart />
              </PricingIcon>
              <PricingCardPlan>Digital Product Development</PricingCardPlan>
              <PricingCardCost>$299.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>1000 New User</PricingCardFeature>
                <PricingCardFeature>$50,00 Budget</PricingCardFeature>
                <PricingCardFeature>Retargeting Analysis</PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCard>
            <PricingCard>
              <PricingIcon>
                <FaHornbill />
              </PricingIcon>
              <PricingCardPlan>Business Software</PricingCardPlan>
              <PricingCardCost>$999.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>Unlimited User</PricingCardFeature>
                <PricingCardFeature>Unlimited Pack</PricingCardFeature>
                <PricingCardFeature>Retargeting Analysis</PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </>
  );
};

export default Pricing;
