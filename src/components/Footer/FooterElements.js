import styled from "styled-components";

export const FooterSection = styled.section`
  height: 25vh;
  background-color: #96676c;
  color: #fdf9ee;
  text-align: center;
  font-size: 16px;

  h1 {
    font-size: 20px;
    margin-bottom: 16px;
  }

  span {
    font-weight: 700;
  }

  a {
    color: #fdf9ee;
    position: relative;
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
  }

  li {
    margin-top: 6px;
  }

`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
`;

export const FooterLinks = styled.div`
  width: 30%;
  margin-top: 40px;
`;
