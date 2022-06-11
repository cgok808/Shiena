import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { device } from "../breakpoint";

export const ServicesSection = styled.section`
  height: 100vh;
  background-color: #dca69c;

  @media ${device.laptop} {
    height: 100%;
  }

  img {
    height: 90px;
    width: 90px;
    z-index: 100;
  }
`;

export const PinkCircle = styled.div`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  background-color: #efb8b3;
  position: relative;
  top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ServicesCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 80px;

  @media ${device.laptop} {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px;
  }
`;

export const ServicesCard = styled.div`
  height: 285px;
  width: 30%;
  background-color: #fdf9ee;
  border-radius: 20px;
  transition: all 300ms ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background-color: #322431;
    transition: all 300ms ease;
    h1 {
      color: #fdf9ee;
    }
    a {
      color: #fdf9ee;
    }
    img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(24%)
        saturate(636%) hue-rotate(317deg) brightness(100%) contrast(98%);
    }
  }

  @media ${device.laptop} {
    margin-top: 20px;
    width: 440px;
  }

  @media ${device.tablet} {
    width: 300px;
  }
`;

export const ServicesCardTitle = styled.h1`
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  position: relative;
  top: 20%;
  color: #322431;
  transition: all 300ms ease;
`;

export const ServicesCardSubtitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 22%;
  transition: all 300ms ease;
`;

export const ServicesCardSubtitleHover = styled.a`
  position: relative;
  color: #322431;

  &:after {
    content: "";
    position: absolute;
    bottom: -3px;
    height: 1px;
    width: 0;
    right: 0;
    transition: all 300ms ease;
    background-color: #fff;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

export const Arrow = styled(MdKeyboardArrowRight)`
  position: relative;
  top: 4px;
`;
