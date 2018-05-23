import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './router';
import store from './modules/createStore';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
