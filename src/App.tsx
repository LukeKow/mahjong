import * as React from 'react';
import './App.css';
import Board from './domain/board/model/Board';
import ICardService from './services/ICardService';
import ICardProps from './domain/card/model/ICardProps';
import CardService from './services/CardService';
// import ICardProps from './domain/card/model/ICardProps';
// import ICardForBoardGetter from './services/ICardForBoardGetter';
// import MahjongCardForBoardGetter from './services/MahjongCardForBoardGetter';

interface IAppState{
  boardSize: number;
  cards: ICardProps[];
  isLoadingCards: boolean;
}

export default class App extends React.Component<{}, IAppState>{

  private cardService: ICardService;
  
  constructor(props: {}){
    super(props);    

    this.state = { 
      boardSize: 2,
      isLoadingCards: true,
      cards: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.cardService = new CardService(2);
  }


  componentDidMount(){
    
  }

  private handleCardClick(cardId: number) {
      
  }

  private handleChange(event: any){
    event.preventDefault();
    
    this.setState({
      cards: new Array<ICardProps>(),
      isLoadingCards: true
    });

    this.cardService = new CardService(event.target.value);
    this.cardService.getCards(this.handleCardClick).then((data)=>{
      this.setState({
        cards: data,
        isLoadingCards: false
      });
    });

    this.setState({
      boardSize: event.target.value
    });
  }

  public render() {
    return (
      <div>
        <label>
            Select board size:
          </label>
          <select onChange={this.handleChange}>
            <option value="2">2x2</option>
            <option value="4">4x4</option>
            <option value="6">6x6</option>
          </select>
          
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