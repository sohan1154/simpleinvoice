import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import MainNavigator from './navigation';

const App = () => {
  return (
    <AppWrapper>
      <StatusBar barStyle='light-content' />
      <MainNavigator />
    </AppWrapper>
  )
}

const AppWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default App
