import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CardsComponent from './poc/CardsComponent';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react';
import CardsStore from './poc/CardsStore';
const chuj = (<Provider store={CardsStore}>
  <CardsComponent />
</Provider>);
ReactDOM.render(chuj, document.getElementById('root') as HTMLElement);
registerServiceWorker();
