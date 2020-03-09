import React, { useRef } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import {
  Container,
  PageTitle,
  Form,
  FormInput,
  PrimaryButton,
  SecondaryButton,
} from './styles';

import Background from '~/components/Background';
import { View } from 'react-native';

export default function SignUp({ navigation: { goBack } }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleSubmit() {}

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
              />
              <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Password"
                ref={passwordRef}
                onSubmitEditing={() => confirmPasswordRef.current.focus()}
                returnKeyType="next"
              />
              <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
              />
            </View>
            <View>
              <PrimaryButton onPress={() => {}}>Create</PrimaryButton>
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
