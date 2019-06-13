import Card from './Card';
import { observable, action, computed } from 'mobx';

export default class CardsStore {
    
    @observable
    public cards: Card[] = [];

    @action
    public pushCard=(card: Card) =>{
        this.cards.push(card);
    }

    @action
    public toggleCardSide=(card: Card)=>{
        card.toggleIsHeadsUp();
    }

    @computed
    public get cardsCount(): number {
        return this.cards.length;
    }

}