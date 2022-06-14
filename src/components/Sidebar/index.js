import React from "react";
import {
  SidebarContainer,
  SidebarLinks,
  SidebarLink,
  SidebarLinkWords,
  Bar,
  BarContainer,
} from "./SidebarElements";
import {
  FaSuitcase,
  FaHome,
  FaMusic,
  FaVolumeUp,
  FaMicrophone,
  FaImages,
  FaStar,
  FaCommentAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h1>AHR</h1>
      <BarContainer>
        <Bar />
      </BarContainer>
      <SidebarLinks>
        <SidebarLink to='home' smooth={true} duration={500}>
          <FaHome />
          <SidebarLinkWords>home</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='services' smooth={true} duration={500}>
          <FaSuitcase />
          <SidebarLinkWords>services</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='demos' smooth={true} duration={500}>
          <FaVolumeUp />
          <SidebarLinkWords>demos</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='studio' smooth={true} duration={500}>
          <FaMicrophone />
          <SidebarLinkWords>studio</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='roles' smooth={true} duration={500}>
          <FaImages />
          <SidebarLinkWords>roles</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='reviews' smooth={true} duration={500}>
          <FaStar />
          <SidebarLinkWords>reviews</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='contact' smooth={true} duration={500}>
          <FaCommentAlt />
          <SidebarLinkWords>contact</SidebarLinkWords>
        </SidebarLink>
      </SidebarLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
