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
            <Title>{data.title}</Title>
            <Message numberOfLines={3}>{data.content}</Message>
          </Content>
        </Body>
        <Status>
          <Distance>0 days</Distance>
          <Time>0 km</Time>
        </Status>
      </Container>
      <Separator />
    </>
  );
}
