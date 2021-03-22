import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link as LinkScroll } from 'react-scroll';

export const HeroContainer = styled.div`
  background: #132226;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;

  :before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: linear-gradient(
      108deg,
      rgba(60, 59, 63, 1) 0%,
      rgba(96, 92, 60, 0.94) 100%
    );
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(60, 59, 63, 1) 0%,
    rgba(96, 92, 60, 0.94) 100%
  );
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: linear-gradient(
    108deg,
    rgba(60, 59, 63, 1) 0%,
    rgba(96, 92, 60, 0.94) 100%
  );
  opacity: 0.3;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  font-size: 48px;
  text-align: center;
  z-index: 1;
  font-weight: bold;
  color: #effd5f;
  background: transparent;
  text-shadow: 3px 5px 2px #474747;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fcf4a3;
  font-size: 36px;
  text-align: center;
  max-width: 600px;
  line-height: 2.5rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const HeroButton = styled(LinkScroll)`
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
