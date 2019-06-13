import * as React from 'react';
import { observer, inject } from 'mobx-react';
import ICardsComponentProps from './ICardsComponentProps';
import Card from './Card';
import CardsStore from './CardsStore';

const cards: Card[] = [new Card(1,true,'A'),new Card(2,true,'B'),new Card(3,true,'C')]
@inject('store')
@observer
export default class CardsComponent extends React.Component<ICardsComponentProps, {}>{
    private headsValue: string = '';
    private isHeadsUp: any = false;
    private store = new CardsStore();
    
    componentDidMount(){
       this.store.cards = cards;
    }
    handleCardClick = (event: React.MouseEvent<HTMLLIElement>) => {
        let id = Number.parseInt((event as any)._targetInst.key);
        let card = this.store.cards.find((card) => card.id === id);
        if(card) card.toggleIsHeadsUp();
    }
    handleHeadsCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.headsValue = e.target.value;
    }
    handleHeadsUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.isHeadsUp = e.target.value;
    }
    handleSubmit = (event: React.FormEvent<any>) => {
        event.preventDefault();
        this.store.pushCard(
            new Card(this.store.cardsCount+1, this.isHeadsUp, this.headsValue)
        );
    }
    public render() {
        return (
            <div>
                <ul>
                    {this.store.cards.map(card =>
                        (<li key={card.id} onClick={this.handleCardClick}>{card.isHeadsUp ? card.headsValue : "TAILS"}</li>)
                    )}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='heads value' onChange={this.handleHeadsCHange} />
                    <input type='checkbox' placeholder='is heads up' onChange={this.handleHeadsUpChange}/>
                    <button type='submit'>submit</button>
                </form>

            </div>
        );
    }
}