import React, { useState } from 'react';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu onClick={handleClick} click={toggle}>
          <SidebarLink to='about'>What We Do</SidebarLink>
          <SidebarLink to='online'>Movie Study Courses</SidebarLink>
          <SidebarLink to='services'>Proof Reading Services</SidebarLink>
          <SidebarLink to='signup'>Join Us</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Login</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
