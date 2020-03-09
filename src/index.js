import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import Routes from './routes';
import { store, persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#3d3d3d" hidden />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
