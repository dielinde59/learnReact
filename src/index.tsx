import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Main />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker(); 

