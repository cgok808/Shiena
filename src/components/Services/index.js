import React from "react";
import {
  Arrow,
  PinkCircle,
  ServicesCard,
  ServicesCardSubtitle,
  ServicesCardSubtitleHover,
  ServicesCardTitle,
  ServicesCardWrapper,
  ServicesSection,
} from "./ServicesElements";
import SubHeading from "../SubHeading";
import SingingIcon from "../../assets/services/singing.png";
import EditingIcon from "../../assets/services/editing.png";
import VoiceOverIcon from "../../assets/services/voiceover.png";

const Services = () => {
  return (
    <ServicesSection id="services">
      <SubHeading title='services' subtitle='WHAT I CAN DO' color='#322431' />
      <ServicesCardWrapper>
        <ServicesCard>
          <PinkCircle>
            <img src={SingingIcon} alt='' />
          </PinkCircle>
          <ServicesCardTitle>singing</ServicesCardTitle>
          <ServicesCardSubtitle>
            <ServicesCardSubtitleHover
              href='https://www.youtube.com/shishishiena'
              target='_blank'
            >
              hear cool jams <Arrow />
            </ServicesCardSubtitleHover>
          </ServicesCardSubtitle>
        </ServicesCard>
        <ServicesCard>
          <PinkCircle>
            <img src={VoiceOverIcon} alt='' />
          </PinkCircle>
          <ServicesCardTitle>voiceover</ServicesCardTitle>
          <ServicesCardSubtitle>
            <ServicesCardSubtitleHover
              href='https://www.youtube.com/shishishiena'
              target='_blank'
            >
              oooh shiny demos <Arrow />
            </ServicesCardSubtitleHover>
          </ServicesCardSubtitle>
        </ServicesCard>
        <ServicesCard>
          <PinkCircle>
            <img src={EditingIcon} alt='' />
          </PinkCircle>
          <ServicesCardTitle>editing</ServicesCardTitle>
          <ServicesCardSubtitle>
            <ServicesCardSubtitleHover
              href='https://www.youtube.com/shishishiena'
              target='_blank'
            >
              well dm me... <Arrow />
            </ServicesCardSubtitleHover>
          </ServicesCardSubtitle>
        </ServicesCard>
      </ServicesCardWrapper>
    </ServicesSection>
  );
};

export default Services;
