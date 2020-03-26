import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signUpRequest } from '~/store/modules/auth/actions';

import {
  Container,
  PageTitle,
  Form,
  FormInput,
  PrimaryButton,
  SecondaryButton,
} from './styles';

import Background from '~/components/Background';

export default function SignUp({ navigation: { goBack } }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit() {
    if (password === confirmPassword) {
      dispatch(signUpRequest(name, email, password));
    } else {
      //Alert.alert('Registration error', 'Verify your access data');
    }
  }

  return (
    <Background>
      <Container>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <PageTitle>register</PageTitle>
          <Form>
            <View>
              <FormInput
                icon="mail-outline"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="User name"
                onSubmitEditing={() => emailRef.current.focus()}
                returnKeyType="next"
                value={name}
                onChangeText={setName}
              />
              <FormInput
                icon="mail-outline"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email address"
                ref={emailRef}
                onSubmitEditing={() => passwordRef.current.focus()}
                returnKeyType="next"
                value={email}
                onChangeText={setEmail}
              />
              <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Password"
                ref={passwordRef}
                onSubmitEditing={() => confirmPasswordRef.current.focus()}
                returnKeyType="next"
                value={password}
                onChangeText={setPassword}
              />
              <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
            <View>
              <PrimaryButton loading={loading} onPress={handleSubmit}>
                Create
              </PrimaryButton>
              <SecondaryButton
                onPress={() => {
                  goBack();
                }}>
                Back
              </SecondaryButton>
            </View>
          </Form>
        </KeyboardAvoidingView>
      </Container>
    </Background>
  );
}
