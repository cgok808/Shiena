import styled from "styled-components";

export const IntroSection = styled.section`
  background-color: #dca69c;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #322431;
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #dca69c;
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &:before {
    bottom: 40vh;
    border-radius: 45%;
    animation-duration: 10s;
  }

  &:after {
    bottom: 35vh;
    opacity: 0.5;
    border-radius: 47%;
    animation-duration: 10s;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, 0) rotateZ(0deg);
    }
    50% {
      transform: translate(-50%, -2%) rotateZ(180deg);
    }
    100% {
      transform: translate(-50%, 0%) rotateZ(360deg);
    }
  }
`;

export const IntroBioWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 300px;
`;

export const IntroBio = styled.h1`
  font-weight: 700;
  font-size: 60px;
  color: #fdf9ee;
  z-index: 1;
`;

export const IntroButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const IntroButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
  font-weight: 900;
  z-index: 1;
  border: solid #fdf9ee 1px;
  margin: 20px;
  padding: 12px 24px;
  font-size: 20px;
  border-radius: 10px;
  color: #fdf9ee;
  box-shadow: 0 4px 0 0 #fdf9ee;
  transition: all 300ms ease;

  &:hover {
    transform: translateY(5px);
    transition: all 300ms ease;
    box-shadow: none;
  }
`;
