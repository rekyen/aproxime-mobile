import React from 'react';
import { View, Text } from 'react-native';

import { Container, List } from './styles';

import Background from '~/components/Background';
import Post from '~/components/Post';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Home() {
  return (
    <Background>
      <Container>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Post data={item} />}
        />
      </Container>
    </Background>
  );
}
