import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Icon1 from '../../images/vid-learning.svg';
import Icon2 from '../../images/vid-monitor.svg';
import Icon3 from '../../images/vid-draw.svg';
import { ArrowForward, ArrowRight } from '../HeroSection/HeroElements';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesIcon,
  ButtonWrap,
} from './ServicesElements';
import { Button } from '../ButtonElement';

const Services = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Proof Reading</ServicesH2>
          <ServicesP>
            We correct your documents for you. We will help you write better the
            right way!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Watch Movies, Learn English </ServicesH2>
          <ServicesP>
            "I don't understand native English speakers when they talk to each
            other" "What are they saying?" - Is this you? We can fix that.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Speak Like a Native English Speaker</ServicesH2>
          <ServicesP>
            Learn Colloquials, Verbal Phrases, Idioms -- In other words: "Learn
            shit they didn't teach you in school."
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      <ButtonWrap>
        <Button
          to='/signin'
          onClick={toggleHome}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          Join Us {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
        <Button to='/' onClick={toggleHome}>
          Movie Exchange
        </Button>
      </ButtonWrap>
    </ServicesContainer>
  );
};

export default Services;
