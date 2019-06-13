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
        card.isHeadsUp = !card.isHeadsUp;
    }

    @computed
    public get cardsCount(): number {
        return this.cards.length;
    }

    @computed
    public get cardsHeadUp(): number {
        return this.cards.filter((card) => {return card.isHeadsUp === true;}).length;
    }
    @computed
    public get cardsHeadDown(): number {
        return this.cards.filter((card) => {return card.isHeadsUp === false;}).length;
    }
}