import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SingInScreen from '~/pages/SingIn';
import SingUpScreen from '~/pages/SingUp';

import HomeScreen from '~/pages/Home';
import NewPostScreen from '~/pages/NewPost';
import SettingsScreen from '~/pages/Settings';
import NewPostButton from './components/NewPostButton';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  const isLoggedIn = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          screenOptions={tabScreenOptions}
          tabBarOptions={tabBarOptions}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={homeOptions}
          />
          <Tab.Screen name="NewPost" component={NewPostScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="SingIn"
          screenOptions={stackNavigationOptions}>
          <>
            <Stack.Screen
              name="SingIn"
              component={SingInScreen}
              options={singInOptions}
            />
            <Stack.Screen
              name="SingUp"
              component={SingUpScreen}
              options={singUpOptions}
            />
          </>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const stackNavigationOptions = {
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

const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'NewPost') {
      return <NewPostButton color={color} focused={focused} />;
    } else if (route.name === 'Settings') {
      iconName = 'settings';
    }

    // You can return any component that you like here!
    return <Icon name={iconName} size={size} color={color} />;
  },
});

const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#00F0FF',
  inactiveTintColor: 'rgba(0, 240, 255, 0.25)',
  keyboardHidesTabBar: true,
  style: {
    backgroundColor: '#3d3d3d',
    borderTopColor: '#3d3d3d',
  },
};

const homeOptions = {};

const newPostIconStyle = {};

export default Routes;
