import * as React from 'react';
import './App.css';
import Board from './Board/Board';

export default class App extends React.Component<{},{}> {  

  public render() {
    return (
      <Board/>
    );
  }
}