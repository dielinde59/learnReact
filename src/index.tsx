import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import WelcomePage from './WelcomePage';

ReactDOM.render(
  <WelcomePage />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

