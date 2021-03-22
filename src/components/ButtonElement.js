import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: linear-gradient(
    108deg,
    rgba(96, 92, 60, 0.94) 0%,
    rgba(60, 59, 63, 1) 100%
  );

  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#C2D3DA' : 'yellow')};
  /* font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')}; */
  font-size: 15px;

  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  margin-right: 20px;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;
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
  }

  @media (max-width: 760px) {
    width: 1.5em;
    font-size: 0.5em;
    margin-left: 25px;
  }
`;
