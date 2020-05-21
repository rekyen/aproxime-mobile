import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import { Container, List } from './styles';

import Background from '~/components/Background';
import Post from '~/components/Post';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('posts');
      const pagebleData = response.data;

      setPosts(pagebleData.data);
    }

    loadPosts();
  }, []);

  return (
    <Background>
      <Container>
        <List
          data={posts}
          keyExtractor={item => String(item._id)}
          renderItem={({ item }) => <Post data={item} />}
        />
      </Container>
    </Background>
  );
}
