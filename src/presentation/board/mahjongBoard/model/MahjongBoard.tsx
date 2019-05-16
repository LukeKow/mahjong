import * as React from 'react';
import MahjongCard from 'src/presentation/card/mahjongCard/MahjongCard';
import IBoardState from './IBoardState';
import ICardAppModel from 'src/application/card/ICardAppModel';
import IBoardAppModel from 'src/application/board/IBoardAppModel';

export default class MahjongBoard extends React.Component<IBoardAppModel, IBoardState>{
  
  private comparedCards: Array<ICardAppModel> = new Array<ICardAppModel>();
  // TODO: this component should be responsible only for placing cards on board
  // TODO: all logic and state change should be moved to App component
  
    constructor(props: IBoardAppModel) {
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.state={
          cards: new Array<ICardAppModel>(),
          isLoadingCards: false
        };
    }
    

    componentDidUpdate(){
        if(this.comparedCards.length === 2){
          this.compareCardsAndSetState();
          this.comparedCards = new Array<ICardAppModel>();
        }
      }
    
      componentDidMount(){
        this.setState({
          cards: new Array<ICardAppModel>(),
          isLoadingCards: true
        });
        this.props.cardsSource.getCards(this.handleCardClick).then((data)=>{
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
            {!this.state.isLoadingCards ? this.state.cards.map((mcard) => {
              if (mcard.placedOnBoard) {
                return <MahjongCard key={mcard.id} {...mcard} />
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