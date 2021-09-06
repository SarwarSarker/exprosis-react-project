import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 140px 0;
  background: ${({ lightbg }) => (lightbg ? "#fff" : "#101522")};


  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 64px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 24px;
`;

export const Subtitle = styled.p`
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#f7f8fa" : "#1c2237")};
  max-width: 540px;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 35px;
`;

export const ImgWapper = styled.div`
  max-width: 505px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-bottom: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
