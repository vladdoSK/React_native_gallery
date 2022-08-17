import React from 'react';
import Navigate from './src/navigate'
import { Provider } from 'react-redux';
import { store_redux } from './src/redux/store';

export default function App() {

  return (
      <Provider store={store_redux}>
        <Navigate />
      </Provider>
  );
}

