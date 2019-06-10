import Card from './Card';
import { observable, action, computed } from 'mobx';

class CardsStore {
    
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

}

const store = new CardsStore();
export default store;