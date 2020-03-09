import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const PageTitle = styled.Text`
  color: #00f0ff;
  font-size: 36px;
  text-align: center;
  margin: 20px 0 30px 0;
  font-family: sans-serif;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const FormInput = styled(Input)``;

export const PrimaryButton = styled(Button)``;

export const SecondaryButton = styled(Button)`
  background-color: #3d3d3d;
`;
