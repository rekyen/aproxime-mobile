import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  PageTitle,
  Form,
  FormInput,
  PrimaryButton,
  SecondaryButton,
} from './styles';

import Background from '~/components/Background';

export default function SignIn({ navigation }) {
  const dispath = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispath(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <PageTitle>login</PageTitle>

          <Form>
            <View>
              <FormInput
                icon="mail-outline"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email address"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                value={email}
                onChangeText={setEmail}
              />
              <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Password"
                ref={passwordRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <View>
              <PrimaryButton loading={loading} onPress={handleSubmit}>
                Enter
              </PrimaryButton>
              <SecondaryButton
                onPress={() => {
                  navigation.navigate('SingUp');
                }}>
                Register
              </SecondaryButton>
            </View>
          </Form>
        </KeyboardAvoidingView>
      </Container>
    </Background>
  );
}
