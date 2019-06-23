import Card from 'src/model/Card/Card';
import { observable, action } from 'mobx';
import ICardService from 'src/services/ICardService';

export default class CardsStore{

    private cardsService: ICardService;

    constructor(cardsService: any){
        this.cardsService = cardsService;
    }

    @observable 
    cards: Card[];

    @action
    public loadCards(): void {
        this.cardsService.getCards(16).then((data) => {
            this.cards = data;
        });
    }

    @action
    public toggleCardSide = (id: number): void => {
        let index = this.cards.findIndex((card) => {
            return card.id === id});
        if(index != -1) {
            this.cards[index].toggleCardSide();}
        else{
            console.log('no index found');}
    }
}