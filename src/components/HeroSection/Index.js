import React, { useState } from 'react';
import Video from '../../videos/video3.mp4';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroButton,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Learn English Watching Movies! </HeroH1>
        <HeroP>
          Watch Movies With An ESL Teacher <br /> Learn New Phrases:
          <br /> "Too soon, Junior." - Johnny Tran | The Fast and The Furious
          (2001)
        </HeroP>
        <HeroBtnWrapper>
          <HeroButton
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Join Us {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroButton>
          <HeroButton
            to='services'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Services {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
