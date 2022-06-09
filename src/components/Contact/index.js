import React from "react";
import SubHeading from "../SubHeading";
import {
  ContactSection,
  FirstPairInput,
  SecondPairInput,
  SecondWrapper,
  Wrapper,
} from "./ContactElements";

const Contact = () => {
  return (
    <ContactSection>
      <SubHeading title='contact' subtitle="LET'S TALK" color='#FDF9EE' />
      <form>
        <Wrapper>
          <FirstPairInput type='text' placeholder='Name' />
          <FirstPairInput type='text' placeholder='Email' />
        </Wrapper>
        <SecondWrapper>
          <SecondPairInput type='text' placeholder='Subject' />
        </SecondWrapper>
        <SecondWrapper>
          <textarea name='' id='' cols='30' rows='10' placeholder="Message &#13; &#10;ex. Hello there, I am someone who would love to inquire about commissioning you to have your super hot cool voice be featured in my project!"></textarea>
        </SecondWrapper>
      </form>
    </ContactSection>
  );
};

export default Contact;
