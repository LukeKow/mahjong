import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

// import CardsStore from './poc/CardsStore';
// import CardsComponent from './poc/CardsComponent';
import './index.css';
import CardService from './services/CardService';
import CardsStore from './stores/cardsStore/CardsStore';
import Board from './components/board/Board';

const cardsService = new CardService();
const cardStore = new CardsStore(cardsService);

ReactDOM.render(
  <Provider cardStore={cardStore}>
    <Board />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
