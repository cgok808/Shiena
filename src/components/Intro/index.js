import React from "react";
import TypewriterComponent from "typewriter-effect";
import { IntroBio, IntroBioWrapper, IntroButton, IntroButtonWrapper, IntroSection } from "./IntroElements";

const Intro = () => {
  return (
    <IntroSection id="home">
      <IntroBioWrapper>
        <IntroBio>
          I am
          <TypewriterComponent
            options={{
              strings: [
                "a voice actor",
                "a vocalist",
                "a designer",
                "glad to see you!",
              ],
              autoStart: true,
              loop: true,
              delay: 80,
            }}
          />
        </IntroBio>
      </IntroBioWrapper>
      <IntroButtonWrapper>
        <IntroButton>
          PLAY DEMOS
        </IntroButton>
        <IntroButton>
          CONTACT
        </IntroButton>
      </IntroButtonWrapper>
    </IntroSection>
  );
};

export default Intro;
