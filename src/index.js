import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import configStore from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const {store, persistor} = configStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<div>Loading...</div>}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
