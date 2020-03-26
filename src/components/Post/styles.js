import styled from 'styled-components/native';
import RadialGradient from 'react-native-radial-gradient';

export const Container = styled.View`
  flex-direction: row;
  min-height: 80px;
  padding: 20px 10px 20px 0px;
`;

export const Body = styled.View`
  flex: 14;
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 8;
`;

export const ImageArea = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #00f0ff;
`;

export const Message = styled.Text`
  color: #00f0ff;
`;

export const Status = styled.View`
  flex: 4;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Distance = styled.Text`
  color: #00f0ff;
`;

export const Time = styled.Text`
  color: #00f0ff;
`;

export const Separator = styled.View`
  border: 1px solid rgba(0, 240, 255, 0.25);
`;

export const PostIconActive = styled(RadialGradient).attrs(props => ({
  radius: 20,
  center: [20, 20],
  colors: ['#00F0FF', 'rgba(255, 255, 255, 0) 100%)'],
  stops: [0.1, 0.5, 0.6],
}))`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
`;
