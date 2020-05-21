import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Form, LogoutButton } from './styles';

import Background from '~/components/Background';

export default function Settings() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleLogout() {
    console.tron.log('logout');
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <View>
          <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
        </View>
      </Container>
    </Background>
  );
}
