import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

import CardsStore from './poc/CardsStore';
import CardsComponent from './poc/CardsComponent';
import './index.css';

ReactDOM.render(
  <Provider store={new CardsStore()}>
    <CardsComponent />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
