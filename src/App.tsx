import * as React from 'react';
import './App.css';
import MahjongBoard from './presentation/board/mahjongBoard/model/MahjongBoard';
import ICardAppModelSource from './persistance/card/appModelSource/ICardAppModelSource';
import CardDomainModelSource from './persistance/card/domainModelSource/CardDomainModelSource';
import CardAppModelSource from './persistance/card/appModelSource/CardAppModelSource';
import CardDomainToAppModelMapper from './services/card/CardDomainToAppModelMapper';

export default class App extends React.Component<{},{}> {  
  cardsSource: ICardAppModelSource = new CardAppModelSource(
    new CardDomainModelSource(),
    new CardDomainToAppModelMapper()
  );
  
  // TODO: this component should be responsible for render board
  // getting data fora board should be responsibility of another class
  //private mahjongCardsGetter = new this.mahjongCardsGetter();
  public render() {
    return (
      <MahjongBoard cardsSource={this.cardsSource}/>
    );
  }
}