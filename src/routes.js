import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SingIn from '~/pages/SingIn';
import SingUp from '~/pages/SingUp';

const Stack = createStackNavigator();
let isLoggedIn = false;

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SingIn"
        screenOptions={navigationOptions}>
        {isLoggedIn ? (
          <Stack.Screen name="SingUp" component={SingUp} />
        ) : (
          // <>
          //   <Stack.Screen name="Home" component={HomeScreen} />
          //   <Stack.Screen name="Settings" component={SettingsScreen} />
          // </>
          <>
            <Stack.Screen
              name="SingIn"
              component={SingIn}
              options={singInOptions}
            />
            <Stack.Screen
              name="SingUp"
              component={SingUp}
              options={singUpOptions}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const navigationOptions = {
  animationEnabled: true,
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#3d3d3d',
  },
  headerTintColor: '#00F0FF',
  headerTitleStyle: {
    fontWeight: '100',
  },
};

const singInOptions = {
  title: 'aproxime',
  headerShown: false,
};

const singUpOptions = {
  title: 'aproxime',
  headerShown: false,
};

export default Routes;
