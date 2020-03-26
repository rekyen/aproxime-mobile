import RadialGradient from 'react-native-radial-gradient';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const PostIcon = styled(RadialGradient).attrs({
  radius: 20,
  center: [20, 20],
  colors: ['#00F0FF', 'rgba(255, 255, 255, 0) 100%)'],
  stops: [0.1, 0.9],
})`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
`;
