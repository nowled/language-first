import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    108deg,
    rgba(60, 59, 63, 1) 0%,
    rgba(96, 92, 60, 0.94) 100%
  );
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #f1f3f2;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 2.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 460px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarWrapper = styled.div`
  color: #f1f3f2;
  opacity: ${({ color }) => (color ? '0.1' : '0.9')};
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #f1f3f2;
  cursor: pointer;

  &:hover {
    color: #000;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: linear-gradient(
    108deg,
    rgba(60, 59, 63, 1) 0%,
    rgba(96, 92, 60, 0.94) 100%
  );
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: linear-gradient(
      108deg,
      rgba(60, 59, 63, 1) 0%,
      rgba(96, 92, 60, 0.94) 100%
    );
    color: #010606;
  }
`;
