import * as React from 'react';
import './App.css';
import Card from './Card/Model/Card';
import { ICard } from './Card/Model/ICard';

class App extends React.Component<{}, { cards: Array<ICard> }> {
  

  constructor(props: Readonly<{}>) {
    super(props);

    this.handleCardClick = this.handleCardClick.bind(this);

    this.state = {
      cards: [
        {id: 0, headsOnTop: false, headsValue: "One", playable: true, placedOnBoard: true, handleClick: this.handleCardClick},
        {id: 1, headsOnTop: false, headsValue: "Two", playable: true, placedOnBoard: true, handleClick: this.handleCardClick},
        {id: 2, headsOnTop: false, headsValue: "One", playable: true, placedOnBoard: true, handleClick: this.handleCardClick},
        {id: 3, headsOnTop: false, headsValue: "Two", playable: true, placedOnBoard: true, handleClick: this.handleCardClick}
      ]
    };    
  }

  private comparedCards: Array<ICard> = new Array<ICard>();

  componentDidUpdate(){
    if(this.comparedCards.length === 2){
      this.compareCardsAndSetState();
      this.comparedCards = new Array<ICard>();
    } 
  }

  private compareCardsAndSetState(){    
    let areCardMatched: boolean = this.comparedCards[0].headsValue === this.comparedCards[1].headsValue
    this.notifyUserAndChangeState(areCardMatched);
  }

  private notifyUserAndChangeState(areCardsMatched: boolean): void{
    let stateCards = this.state.cards;
    if(areCardsMatched){
      stateCards[this.comparedCards[0].id].placedOnBoard = false;
      stateCards[this.comparedCards[1].id].placedOnBoard = false;
      setTimeout(() => {
        alert('You have found a pair!');
        this.setState({
          cards: stateCards,
        });
    }, 250);  
    }
    else{
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
  }

  private handleCardClick(cardId: number) {
    if(this.comparedCards.length < 2 && this.state.cards[cardId].playable){
      this.comparedCards.push(this.state.cards[cardId])
      let stateCards = this.state.cards;
      stateCards[cardId].headsOnTop = true;
      stateCards[cardId].playable = false;
      this.setState({
        cards: stateCards,
      });   
    }      
  }  

  public render() {
    return (
      <div>
        {this.state.cards.map(mcard => 
          {
            if(mcard.placedOnBoard){
              return <Card key={mcard.id} {...mcard}/>
            }
            else{
              return <div className='card'> :-) </div>
            }
          }
        )}
      </div>
    );
  }
}

export default App;
