import React from "react";
import { FooterSection, FooterWrapper, FooterLinks } from "./FooterElements";
import angel from "../../assets/angel.pdf";

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper>
        <FooterLinks>
          <h1>contact</h1>
          <ul>
            <li>
              <span>email:</span> shishishiena@gmail.com
            </li>
            <li>
              <span>twitter:</span> @shishishiena
            </li>
            <li>
              <span>discord:</span> @shiena#0777
            </li>
          </ul>
        </FooterLinks>
        <FooterLinks>
          <h1>resumes</h1>
          <ul>
            <li>
              <a
                href='https://docs.google.com/document/d/1Sa6qygMo57OxqaPO8gKrBeK9yNFZnh3MoDO1q2H17FU/edit'
                target='_blank'
              >
                voice acting resume
              </a>
            </li>
            <li>
              <a
                href='https://docs.google.com/document/d/1Sa6qygMo57OxqaPO8gKrBeK9yNFZnh3MoDO1q2H17FU/edit#heading=h.ersencf5upcr'
                target='_blank'
              >
                singing resume
              </a>
            </li>
            <li>
              <a href={angel} target='_blank'>
                academic resume
              </a>
            </li>
          </ul>
        </FooterLinks>
        <FooterLinks>
          <h1>about me</h1>
          <p>
            i'm just a lil internet gremlim who would like to help bring a
            budget-friendly and accessible voice to your project! wake up and
            hire me please. thank you! :D
          </p>
        </FooterLinks>
      </FooterWrapper>
    </FooterSection>
  );
};

export default Footer;
