import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App value="Hello world!" />,
  document.body.appendChild(document.createElement('div'))
);
