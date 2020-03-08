import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={navigationOptions}>
        <Stack.Screen name="Home" component={Main} options={homeOptions} />
        <Stack.Screen name="Details" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const navigationOptions = {
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

const homeOptions = { title: 'aproxime' };

export default Routes;
