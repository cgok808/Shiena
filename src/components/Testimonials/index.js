import React from "react";
import SubHeading from "../SubHeading";
import {
  TestimonialsBox,
  TestimonialsMiniBox,
  TestimonialsSection,
  TestimonialsWrapper,
} from "./TestimonialsElements";

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <SubHeading
        title='testimonials'
        subtitle="THEY SAY I'M COOL"
        color='#3B2A3A'
      />
      <TestimonialsWrapper>
        <TestimonialsBox>
          <p>
            Angel is an incredible voice actor! She nailed down every line
            perfectly, adjusted to changes, and communication was excellent. Do
            yourself and your project a favor and hire her! Also, they learned a
            few difficult names and words in another language, which is an
            invaluable skill to have when trying to be authentic to your work.
          </p>
        </TestimonialsBox>
      </TestimonialsWrapper>
      <TestimonialsWrapper>
        <TestimonialsMiniBox>LARAFAN / AUTHOR</TestimonialsMiniBox>
      </TestimonialsWrapper>
    </TestimonialsSection>
  );
};

export default Testimonials;
