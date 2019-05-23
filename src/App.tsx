import * as React from 'react';
import './App.css';
import Board from './domain/board/model/Board';
import ICardService from './services/ICardService';
import ICardProps from './domain/card/model/ICardProps';
import CardService from './services/CardService';
// import ICardProps from './domain/card/model/ICardProps';
// import ICardForBoardGetter from './services/ICardForBoardGetter';
// import MahjongCardForBoardGetter from './services/MahjongCardForBoardGetter';

interface IAppState {
  boardSize: number;
  cards: ICardProps[];
  isLoadingCards: boolean;
}

export default class App extends React.Component<{}, IAppState>{

  private cardService: ICardService;
  
  private boardSizeDropDown: React.RefObject<HTMLSelectElement>;

  constructor(props: {}) {
    super(props);

    this.state = {
      boardSize: 0,
      isLoadingCards: true,
      cards: [],
    };
    
    this.boardSizeDropDown = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {

  }

  private handleCardClick(cardId: number) {

  }

  private handleSubmit(event: any) {
    event.preventDefault();

    this.setState({
      isLoadingCards: true
    });

    let boardSize = event.target['0'].value;
    this.cardService = new CardService(boardSize);
    this.cardService.getCards(this.handleCardClick).then((data) => {
      this.setState({
        cards: data,
        boardSize: boardSize,
        isLoadingCards: false
      });
    });

    
  }

  public render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select board size:
          </label>
          <select ref={this.boardSizeDropDown}>
            <option value="2">2x2</option>
            <option value="4">4x4</option>
            <option value="6">6x6</option>
          </select>
          <button type='submit'>Start game</button>
        </form>
        <div className='board'>
          {!this.state.isLoadingCards ?
            <Board cards={this.state.cards} size={this.state.boardSize} />
            :
            <div>
              loading cards
              </div>
          }
        </div>
      </div>

    );
  }
}