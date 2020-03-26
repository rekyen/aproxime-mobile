import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import App from './App';
import { store, persistor } from './store';

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#3d3d3d" hidden />
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Index;
