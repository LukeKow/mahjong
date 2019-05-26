import * as React from 'react';
import './App.css';
import Board from './domain/board/model/Board';
import ICardService from './services/ICardService';
import ICardProps from './domain/card/model/ICardProps';
import CardService from './services/CardService';

interface IAppState {
  boardSize: number;
  cards: ICardProps[];
  isLoadingCards: boolean;
}

export default class App extends React.Component<{}, IAppState>{

  private cardService: ICardService;

  private boardSizeDropDown: React.RefObject<HTMLSelectElement>;
  private comparedCards: Array<ICardProps> = new Array<ICardProps>();

  constructor(props: {}) {
    super(props);

    this.state = {
      boardSize: 0,
      isLoadingCards: true,
      cards: [],
    };

    this.boardSizeDropDown = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  componentDidUpdate() {
    if (this.comparedCards.length === 2) {
      this.compareCardsAndUpdateState();
    }
  }

  private compareCardsAndUpdateState() {
    let areCardMatched: boolean = this.comparedCards[0].headsValue === this.comparedCards[1].headsValue
    this.notifyUserAndUpdateState(areCardMatched);
  }

  private notifyUserAndUpdateState(areCardsMatched: boolean): void {
    let stateCards = this.state.cards;
    if (areCardsMatched) {
      stateCards[this.comparedCards[0].id].placedOnBoard = false;
      stateCards[this.comparedCards[1].id].placedOnBoard = false;
      setTimeout(() => {
        alert('You have found a pair!');
        this.setState({
          cards: stateCards,
        });
      }, 250);
    }
    else {
      stateCards[this.comparedCards[0].id].headsOnTop = false;
      stateCards[this.comparedCards[0].id].playable = true;
      stateCards[this.comparedCards[1].id].headsOnTop = false;
      stateCards[this.comparedCards[1].id].playable = true;
      setTimeout(() => {
        alert('Cards not match!');
        this.setState({
          cards: stateCards,
        });
      }, 250);
    }
    this.comparedCards = new Array<ICardProps>();
  }

  private handleCardClick(cardId: number) {
    if (this.comparedCards.length < 2 && this.state.cards[cardId].playable) {
      this.comparedCards.push(this.state.cards[cardId])
      let stateCards = this.state.cards;
      stateCards[cardId].headsOnTop = true;
      stateCards[cardId].playable = false;

      this.setState({
        cards: stateCards,
      });
    }
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
        <div className='boardWrapper'>
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