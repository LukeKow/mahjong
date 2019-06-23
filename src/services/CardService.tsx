import ICardService from './ICardService'
import Card from '../model/Card/Card';

export default class CardService implements ICardService {

    async getCards(cardsAmount: number): Promise<Card[]> {
        let cards: Card[] = this.getCardsArray(cardsAmount);
        let indexes: number[] = this.getIndexes(cardsAmount);
        let getRandomlyArrangedCards: Promise<Card[]> =  new Promise<Card[]>((resolve, reject) => {
            setTimeout(() => {
                let randomlyArrangedCards: Card[] = [];
                this.fillArrayWithRandomlyArrangedCards(indexes, cards, randomlyArrangedCards);
                resolve(randomlyArrangedCards);
            }, 1000)
        });
        let randomlyArrangedCards: Card[] = await getRandomlyArrangedCards;
        return randomlyArrangedCards;
    }

    private getIndexes(cardsAmount: number): number[]{
        let indexes: number[] = [];
        for(let i = 0; i < cardsAmount; i++){
            indexes.push(i+1);
        }
        return indexes;
    }

    private getCardsArray(cardsAmount: number): Card[]{
        let cards: Card[] = [];
        for(let i = 0; i < cardsAmount; i+=2){
            cards[i] = new Card( i+1, '[M A H J O N G]', `[ ${(i+1).toString()} ]`, true, true, true );
            cards[i+1] = new Card( i+2, '[M A H J O N G]', `[ ${(i+1).toString()} ]`, true, true, true );
        }
        return cards;
    }

    private fillArrayWithRandomlyArrangedCards = (indexes: number[], cards: Card[], arrayToFill: Card[]) : void => {
        for(let i = indexes.length-1; i >= 0; i--){
            let indexDraw = this.getRandomInt(0, i);
            indexes.splice(indexDraw, 1)[0];
            let cardToPush = cards.splice(indexDraw, 1)[0];
            // this.setCardId(arrayToFill.length, cardToPush);
            arrayToFill.push(cardToPush);
        }
    }
    private setCardId(id: number, card: Card){
        card.id = id;
    }
    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
}