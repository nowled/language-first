import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#605C3C' : '#3C3B3F')};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbBars = styled(FaBars)`
  width: 100%;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    height: 40px;
  }

  @media screen and (max-width: 480px) {
    height: 40px;
  }
`;

export const NavLogo = styled(LinkR)`
  color: yellow;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  height: 30%;
  margin-top: 20px;

  border-radius: 50px;
  background: linear-gradient(
    108deg,
    rgba(96, 92, 60, 0.94) 0%,
    rgba(60, 59, 63, 1) 100%
  );
  white-space: nowrap;
  padding: 10px 22px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(60, 59, 63, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(60, 59, 63, 0);
  &:hover {
    transition: all 0.2s ease-in-out;

    background: linear-gradient(
      108deg,
      rgba(60, 59, 63, 1) 0%,
      rgba(96, 92, 60, 0.94) 100%
    );
    color: yellowgreen;
  }

  @media (max-width: 760px) {
    width: 20%;
    font-size: 0.5rem;
    justify-content: center;
  }
  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 10%;
    font-size: 0.8rem;
    justify-content: center;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #eee;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 768px) {
    display: none;
  }
  /* @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    position: absolute;
    top: 80px;
    left: ${({ toggle }) => (toggle ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  } */
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    /* border-bottom: 2px solid #4b59f7; */
  }
`;

export const NavLinks = styled(LinkScroll)`
  color: yellow;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  padding: 0 1rem;
  height: 50%;
  margin-top: 25px;
  margin-left: 15px;
  border-radius: 50px;

  cursor: pointer;

  &.active {
    border-bottom: 3px solid red;
  }
  border-radius: 50px;
  background: linear-gradient(
    108deg,
    rgba(96, 92, 60, 0.94) 0%,
    rgba(60, 59, 63, 1) 100%
  );
  white-space: nowrap;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(60, 59, 63, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(60, 59, 63, 0);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(
      108deg,
      rgba(60, 59, 63, 1) 0%,
      rgba(96, 92, 60, 0.94) 100%
    );
    color: yellowgreen;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 40px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 982px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: linear-gradient(
    108deg,
    rgba(96, 92, 60, 0.94) 0%,
    rgba(60, 59, 63, 1) 100%
  );
  white-space: nowrap;
  padding: 10px 22px;
  color: yellow;
  margin-top: 5px;
  font-size: 16px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(60, 59, 63, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(60, 59, 63, 0);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(
      108deg,
      rgba(60, 59, 63, 1) 0%,
      rgba(96, 92, 60, 0.94) 100%
    );
    color: yellowgreen;
  }
`;
