import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../ButtonElement';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(96, 92, 60, 0.94) 0%,
    rgba(60, 59, 63, 1) 100%
  );
`;

export const BackHomeButton = styled(Button)`
  color: white;
  margin-bottom: 40px;

  @media (max-width: 760px) {
    width: 1.5em;
    font-size: 0.5em;
    margin-left: 25px;
  }

  @media (min-width: 760px) {
    display: flex;
    align-self: center;
    border-radius: 0px !important;
    color: white;
    border: 1px solid black;
    order: 1;

    /* justify-content: center; */
    /* position: absolute; */
    margin-top: 50px;
    width: 5%;
  }
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 400px) {
    height: 80%;
    width: 80%;
  }
  @media (min-width: 411px) and (max-width: 823px) {
    /* height: 60%; */
    width: 70%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: linear-gradient(
    108deg,
    rgba(96, 92, 60, 0.94) 0%,
    rgba(60, 59, 63, 1) 100%
  );
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: linear-gradient(
    108deg,
    rgba(60, 59, 63, 1) 0%,
    rgba(96, 92, 60, 0.94) 100%
  );
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  background: 2s ease-out;
  -moz-transition: background 2s ease-out;
  -o-transition: background 2s ease-out;
  transition: background 2s ease-out;
  transition: background 2s ease-out;

  :hover {
    background: linear-gradient(
      108deg,
      rgba(96, 92, 60, 0.94) 0%,
      rgba(60, 59, 63, 1) 100%
    );
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
