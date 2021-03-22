import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #3c3b3f;
  color: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: linear-gradient(
    108deg,
    rgba(60, 59, 63, 1) 0%,
    rgba(96, 92, 60, 0.94) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  color: #fff;

  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #effd5f;
  margin-bottom: 64px;

  @media (max-width: 760px) {
    font-size: 2rem;

    margin-bottom: 32px;
  }
  @media (max-width: 720px) and (min-width: 540px) {
    font-size: 1rem;

    margin-bottom: 0;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #effd5f;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #eee;
`;

export const ButtonWrap = styled.div`
  margin-top: 34px;
  display: flex;
  justify-content: center;
  color: #fff;

  @media (max-width: 760px) {
    margin-top: 10px;
  }
`;
