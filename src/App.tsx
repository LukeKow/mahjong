import * as React from 'react';
import './App.css';
import Card from './Card/Model/Card';
import { ICard } from './Card/Model/ICard';

// interface IDictionary {
//   [key: string]: Array<ICard>;
// }



class App extends React.Component<{}, { cards: Array<ICard> }> {
  

  constructor(props: Readonly<{}>) {
    super(props);

    this.handleCardClick = this.handleCardClick.bind(this);

    this.state = {
      cards: [
        {id: 0, headsOnTop: false, headsValue: "One", playable: true, handleClick: this.handleCardClick},
        {id: 1, headsOnTop: false, headsValue: "Two", playable: true, handleClick: this.handleCardClick},
        {id: 2, headsOnTop: false, headsValue: "One", playable: true, handleClick: this.handleCardClick},
        {id: 3, headsOnTop: false, headsValue: "Two", playable: true, handleClick: this.handleCardClick}
      ]
    };    
  }

  private comparedCards: Array<ICard> = new Array<ICard>();

  /**
   * if array length is < 2, insert card, then
   *  ...if array length is still < 2 set card headsUp to 'true'
   *  ...else set card headsUp to true and compare cards
   *    ...if cards are equals set headsup false and playable false
   *    ...else set headsup false and playable true
   */
  componentDidUpdate(){
    if(this.comparedCards.length === 2){
      let stateCards = this.state.cards;
      if(this.comparedCards[0].headsValue === this.comparedCards[1].headsValue){
        stateCards[this.comparedCards[0].id].playable = false;
        stateCards[this.comparedCards[1].id].playable = false;
        setTimeout(() => {
          alert('You found a pair!');
          this.setState({
            cards: stateCards,
          });
      }, 500);  
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
        }, 500);
         
      }
      this.comparedCards = new Array<ICard>();
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
        {this.state.cards.filter((fcard) => {
          return fcard.playable || !fcard.playable
        }).map(mcard => 
          <Card key={mcard.id} {...mcard}/>)}
      </div>
    );
  }
}

export default App;
