import React from "react";
import {
  SubHeadingH1,
  SubHeadingP,
  SubHeadingWrapper,
} from "./SubHeadingElements";

const SubHeading = ({ title, subtitle, color }) => {
  return (
    <SubHeadingWrapper titleColor={color}>
      <SubHeadingH1>{title}</SubHeadingH1>
      <SubHeadingP>{subtitle}</SubHeadingP>
    </SubHeadingWrapper>
  );
};

export default SubHeading;
