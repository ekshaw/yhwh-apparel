import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import YHWHApp from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(YHWHApp);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
