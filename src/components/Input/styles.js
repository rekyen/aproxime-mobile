import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  border-radius: 4px;
  border: 2px solid rgba(0, 240, 255, 0.3);

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 240, 255, 0.5)',
})`
  flex: 1;
  font-size: 15px;
  color: #00f0ff;
`;
