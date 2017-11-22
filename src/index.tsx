import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
