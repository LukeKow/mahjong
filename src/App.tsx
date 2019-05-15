import * as React from 'react';
import './App.css';
import Board from './presentation/board/mahjongBoard/model/MahjongBoard';

export default class App extends React.Component<{},{}> {  

  // TODO: this component should be responsible for render board
  // getting data fora board should be responsibility of another class
  //private mahjongCardsGetter = new this.mahjongCardsGetter();
  public render() {
    return (
      <Board />
    );
  }
}