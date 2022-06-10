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
        <SidebarLink to='/'>
          <FaSuitcase />
          <SidebarLinkWords>home</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='/'>
          <FaHome />
          <SidebarLinkWords>services</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='/'>
          <FaVolumeUp />
          <SidebarLinkWords>demos</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='/'>
          <FaMicrophone />
          <SidebarLinkWords>studio</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='/'>
          <FaImages />
          <SidebarLinkWords>roles</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='/'>
          <FaStar />
          <SidebarLinkWords>reviews</SidebarLinkWords>
        </SidebarLink>
        <SidebarLink to='/'>
          <FaCommentAlt />
          <SidebarLinkWords>contact</SidebarLinkWords>
        </SidebarLink>
      </SidebarLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
