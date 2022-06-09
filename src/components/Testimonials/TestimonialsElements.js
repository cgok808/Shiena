import styled from "styled-components";

export const TestimonialsSection = styled.section`
  height: 100vh;
  background-color: #f6e8de;
`;

export const TestimonialsWrapper = styled.div`
  display: flex;
  justify-content: center;

  p {
    width: 75%;
    text-align: center;
    font-size: 17px;
    line-height: 30px;
  }
`;

export const TestimonialsBox = styled.div`
  margin-top: 60px;
  background-color: #e8ccb9;
  border-radius: 30px;
  width: 60%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TestimonialsMiniBox = styled.div`
  border-radius: 20px;
  background-color: #dab19e;
  height: 100px;
  width: 280px;
  position: relative;
  top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
