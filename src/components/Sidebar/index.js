import React from "react";
import {
  SidebarContainer,
  SidebarLinks,
  SidebarLink,
} from "./SidebarElements";
import ShienaLogo from "../../assets/images/unnamed.jpg";

const Sidebar = () => {
  return (
    <SidebarContainer>
        <img src={ShienaLogo} alt='' className='shiena__logo' />
      <SidebarLinks>
        <SidebarLink to="/">home</SidebarLink>
        <SidebarLink to='/'>home</SidebarLink>
        <SidebarLink to='/'>home</SidebarLink>
        <SidebarLink to='/'>home</SidebarLink>
      </SidebarLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
