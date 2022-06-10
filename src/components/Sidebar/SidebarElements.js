import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../breakpoint";

export const SidebarContainer = styled.nav`
  height: 100%;
  width: 230px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #242025;
  overflow-x: hidden;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #dca69c;

  a {
    color: #dca69c;
  }
  h1 {
    padding-top: 30px;
    font-size: 40px;
  }
  h2 {
    font-size: 18px;
    padding-bottom: 30px;
  }

  @media ${device.laptop} {
    width: 130px;
    h1 {
      font-size: 30px;
    }
  }

  /* @media ${device.laptop} {
    display: none;
  } */
`;

export const BarContainer = styled.div`
  height: 12px;
  width: 100px;
  border: 0.5px solid #dca69c;
  border-radius: 2px;
  margin: 10px 0 20px 0;
  background-color: #dca69c;
  transition: all 300ms ease;

  @media ${device.laptop} {
    width: 50px;
    transition: all 300ms ease;
  }
`;

export const Bar = styled.div`
  /* width: 50%;
  height: 10px;
  border-radius: 2px;
  background-color: #242025;
  border: 0.5px solid #dca69c;

  @media ${device.laptop} {
    display: none;
  } */
`;

export const SidebarLinks = styled.div`
  width: 70%;
  transition: all 300ms ease;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 300ms ease;
  }
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  transition: all 300ms ease;
  padding-bottom: 10px;

  &:hover {
    color: rgb(255, 255, 255);
    transition: all 300ms ease;
  }
`;

export const SidebarLinkWords = styled.span`
  margin-left: 20px;
  @media ${device.laptop} {
    display: none;
  }
`;
