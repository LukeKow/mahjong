import Card from 'src/model/Card/Card';
import { observable, action } from 'mobx';
import ICardService from 'src/services/ICardService';

export default class CardsStore {

    private cardsService: ICardService;
    private uncoveredCards: Card[] = [];

    constructor(cardsService: any) {
        this.cardsService = cardsService;
    }

    @observable
    cards: Card[];

    @action
    public loadCards(cardsNumber: number): void {
        this.cardsService.getCards(cardsNumber).then((data) => {
            this.cards = data;
        });
    }

    @action
    public toggleCardSide = (id: number): void => {
        let index = this.cards.findIndex((card) => {
            return card.id === id
        });
        if (index != -1) {
            this.cards[index].toggleCardSide();
        }
        else {
            console.log('no index found');
        }
    }

    @action
    public handleCardClick = (id: number): void => {
        if(!id) return;
        let index = this.cards.findIndex((card) => {
            return card.id === id
        });
        if (index != -1 && this.uncoveredCards.length < 2 && this.cards[index].playable) {
            this.uncoveredCards.push(this.cards[index])
            this.cards[index].toggleCardSide();
            this.cards[index].playable = false;
        }
        if (this.uncoveredCards.length === 2) {
            this.compareCardsAndUpdateState();
        }
        
    }
    private compareCardsAndUpdateState() {
        let areCardMatched: boolean = this.uncoveredCards[0].tails === this.uncoveredCards[1].tails;
        this.notifyUserAndUpdateState(areCardMatched);
    }

    private notifyUserAndUpdateState(areCardsMatched: boolean): void {
        if (areCardsMatched) {
            setTimeout(() => {
                this.cards.find((card) => { return card.id === this.uncoveredCards[0].id }).inGame = false;
                this.cards.find((card) => { return card.id === this.uncoveredCards[1].id }).inGame = false;
                this.uncoveredCards = new Array<Card>();
            }, 250);
        }
        else {
            let firstCard: Card = this.cards.find((card) => { return card.id === this.uncoveredCards[0].id });
            let secondCard: Card = this.cards.find((card) => { return card.id === this.uncoveredCards[1].id });
            setTimeout(() => {
                firstCard.toggleCardSide();
                firstCard.playable = true;
                secondCard.toggleCardSide();
                secondCard.playable = true;
                this.uncoveredCards = new Array<Card>();
            }, 250);
        }
        
    }
}