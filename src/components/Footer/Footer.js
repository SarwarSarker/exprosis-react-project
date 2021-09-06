import React from "react";
import {
  FooterSection,
  FooterHeader,
  FooterIcon,
  FooterHeadTitle,
  FooterHeadText,
  FooterSocial,
  FooterSocialIcon,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./Footer.element";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterHeader>
          <FooterHeadTitle to="/">
          <FooterIcon />
              Exprosis
              </FooterHeadTitle>
          <FooterHeadText>
            We are Creative. World's best IT service company. Get the most of
            reduction in your team’s operating creates amazing UI/UX
            experiences.
          </FooterHeadText>
          <FooterSocial>
            <FooterSocialIcon>
              <FaFacebookF />
            </FooterSocialIcon>
            <FooterSocialIcon>
              <FaTwitter />
            </FooterSocialIcon>
            <FooterSocialIcon>
              <FaInstagram />
            </FooterSocialIcon>
            <FooterSocialIcon>
              <FaLinkedinIn />
            </FooterSocialIcon>
          </FooterSocial>
        </FooterHeader>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Destinations</FooterLink>
            <FooterLink to="/">Sponsorships</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/">Submit Video</FooterLink>
            <FooterLink to="/">Ambassadors</FooterLink>
            <FooterLink to="/">Agency</FooterLink>
            <FooterLink to="/">Influencer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterSection>
    </>
  );
};

export default Footer;
