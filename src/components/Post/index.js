import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  Body,
  ImageArea,
  Title,
  Message,
  Content,
  Status,
  Distance,
  Time,
  Separator,
  PostIconActive,
} from './styles';

export default function Post({ data }) {
  return (
    <>
      <Container>
        <Body>
          <ImageArea>
            <PostIconActive />
          </ImageArea>
          <Content>
            <Title>Teste</Title>
            <Message numberOfLines={3}>
              tentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContetentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentntContentContentContentContentContentContenttentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
            </Message>
          </Content>
        </Body>
        <Status>
          <Distance>34{data} days</Distance>
          <Time>1{data}.2 km</Time>
        </Status>
      </Container>
      <Separator />
    </>
  );
}
