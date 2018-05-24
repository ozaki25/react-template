import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from 'src/router';
import store from 'src/modules/createStore';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
