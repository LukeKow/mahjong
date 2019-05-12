import * as React from 'react';
import ICardProps from 'src/presentation/card/mahjongCard/model/ICardProps';
import Card from 'src/presentation/card/mahjongCard/model/Card';
// import IBoardProps from './IBoardProps';
import IBoardState from './IBoardState';
// import '../Style/Board.css';
import CardService from 'src/persistance/card/CardSource';
import ICardService from 'src/persistance/card/ICardSource';

export default class Board extends React.Component<{}, IBoardState>{
  private cardService: ICardService;
  private comparedCards: Array<ICardProps> = new Array<ICardProps>();

  // TODO: this component should be responsible only for placing cards on board
  // TODO: all logic and state change should be moved to App component
  
    constructor(props: Readonly<{}>) {
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.cardService = new CardService();
        this.state={
          cards: new Array<ICardProps>(),
          isLoadingCards: false
        };
    }
    

    componentDidUpdate(){
        if(this.comparedCards.length === 2){
          this.compareCardsAndSetState();
          this.comparedCards = new Array<ICardProps>();
        }
      }
    
      componentDidMount(){
        this.setState({
          cards: new Array<ICardProps>(),
          isLoadingCards: true
        });
        this.cardService.getCards(this.handleCardClick).then((data)=>{
          this.setState({
            cards: data,
            isLoadingCards: false
          });
        });
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

          <div className='board'>
            {!this.state.isLoadingCards ? this.state.cards.map((mcard, index) => {
              if (mcard.placedOnBoard) {
                return <Card key={mcard.id} {...mcard} />
              }
              else {
                return <div className='card'> :-) </div>
              }
            }
            )
              :
              <div>
                loading cards
          </div>
            }
          </div>

        );
      }
}