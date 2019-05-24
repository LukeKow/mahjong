import * as React from 'react';
import ICardProps from 'src/domain/card/model/ICardProps';
import Card from 'src/domain/card/model/Card';
import IBoardState from './IBoardState';
import '../style/Board.css';
import IBoardProps from './IBoardProps';
// import ICardForBoardGetter from 'src/services/ICardForBoardGetter';
// import MahjongCardForBoardGetter from 'src/services/MahjongCardForBoardGetter';

export default class Board extends React.Component<IBoardProps, IBoardState>{
  private comparedCards: Array<ICardProps> = new Array<ICardProps>();

  // TODO: this component should be responsible only for placing cards on board
  // TODO: all logic and state change should be moved to App component
  
    constructor(props: IBoardProps) {
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
        // this.cardService = new CardService(this.props.size);
        // this.cardsGetter = new MahjongCardForBoardGetter(this.props.size);
        this.state={
          cards: props.cards,
          isLoadingCards: false,
          size: props.size
        };
    }
    

    componentDidUpdate(){
        if(this.comparedCards.length === 2){
          this.compareCardsAndSetState();
          this.comparedCards = new Array<ICardProps>();
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
        let boardCssClassName = this.getBoardCssClass();
        return (
          <div className={`board ${boardCssClassName}`}>
            {this.props.cards.map((mcard, index) => {
              if (mcard.placedOnBoard) {
                return <Card key={mcard.id} {...mcard} />
              }
              else {
                return <div key={index} className='card'> :-) </div>
              }
            })}
          </div>
        );
      }
      
      private getBoardCssClass(): string{
        switch(this.props.size.toString()){
          case '2':
            return 'twoOntwoBoard';
          case '4':
            return 'fourOnFourBoard';
          case '6':
            return 'sixOnSixBoard';
          default: 
            return '';
        }
      }
}