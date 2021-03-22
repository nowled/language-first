import React, { useState } from 'react';

import { ArrowForward, ArrowRight } from '../HeroSection/HeroElements';
import {
  FormContent,
  FormH1,
  FormLabel,
  FormWrap,
  Form,
  FormButton,
  FormInput,
  Container,
  Text,
  BackHomeButton,
} from './SigninElements';

const SignIn = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <BackHomeButton
              to='/'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Back Home {hover ? <ArrowForward /> : <ArrowRight />}
            </BackHomeButton>
            <Form action='#'>
              <FormH1>Sign Up/Sign In</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Register Or LogIn</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
