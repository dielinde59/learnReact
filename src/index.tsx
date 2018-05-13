import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import WelcomePage from './SubPages/WelcomePage/WelcomePage';

ReactDOM.render(
  <WelcomePage name='Diete' />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker(); 

