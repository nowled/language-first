import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #eee;
  /** change color don't forget to change color this is the background of the page **/
  background: linear-gradient(
    108deg,
    rgba(60, 59, 63, 1) 0%,
    rgba(96, 92, 60, 0.94) 100%
  );

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    font-size: 1rem;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: repeat(autofit, minmax(auto, 1fr));
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2  col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1'  'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #3c3b3f;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #effd5f;

  /* @media screen and (max-width: 480px) {
    font-size: 32px;
  } */
  @media (max-width: 760px) {
    font-size: 22px;
    /* padding-left: 32px; */
    padding-right: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: clamp(100%, 1rem + 2vw, 24px);
  line-height: 34px;
  /* color: ${({ darkText }) => (darkText ? '#010606' : '#eee')}; */
  color: #eee;
  @media (max-width: 760px) {
    font-size: 18px;
    padding-left: 14px;
    padding-right: 24px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
