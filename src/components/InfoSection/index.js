import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import { animateScroll as scroll } from 'react-scroll';
import { ArrowForward, ArrowRight } from '../HeroSection/HeroElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  description,
  buttonLabel,
  homeLabel,
  img,
  alt,
  headline,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to='/signin'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                  >
                    {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
                  <Button to='/' onClick={toggleHome}>
                    {homeLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
