import ICardService from './ICardService'
import ICardProps from 'src/domain/card/model/ICardProps';

export default class CardService implements ICardService {
    private totalNumberOfCards: number;

    constructor(boardSize: number){
        this.totalNumberOfCards = boardSize * boardSize;
    }    

    async getCards(handleCardClick: Function): Promise<ICardProps[]> {
        let cards: ICardProps[] = this.getCardsArray(handleCardClick);
        let indexes: number[] = this.getIndexes();
        let getRandomlyArrangedCards: Promise<ICardProps[]> =  new Promise<ICardProps[]>((resolve, reject) => {
            setTimeout(() => {
                let randomlyArrangedCards: ICardProps[] = [];
                for(let i = indexes.length-1; i >= 0; i--){
                    let indexDraw = this.getRandomInt(0, i);
                    indexes.splice(indexDraw, 1)[0];
                    let cardToPush = cards.splice(indexDraw, 1)[0];
                    this.setCardId(randomlyArrangedCards.length, cardToPush);
                    randomlyArrangedCards.push(cardToPush);
                }
                resolve(randomlyArrangedCards);
            }, 1000)
        });
        let randomlyArrangedCards: ICardProps[] = await getRandomlyArrangedCards;
        return randomlyArrangedCards;
    }

    private getIndexes(): number[]{
        let indexes: number[] = [];
        for(let i = 0; i < this.totalNumberOfCards; i++){
            indexes.push(i);
        }
        return indexes;
    }

    private getCardsArray(handleCardClick: Function): ICardProps[]{
        let cards: ICardProps[] = [];
        for(let i = 0; i < this.totalNumberOfCards; i+=2){
            cards[i] = {
                id: 0,
                headsOnTop: false,
                headsValue: `[ ${(i+1).toString()} ]`,
                tailsValue: '[M A H J O N G]',
                playable: true,
                handleClick: handleCardClick,
                placedOnBoard: true,
            };
            cards[i+1] = {
                id: 0,
                headsOnTop: false,
                headsValue: `[ ${(i+1).toString()} ]`,
                tailsValue: '[M A H J O N G]',
                playable: true,
                handleClick: handleCardClick,
                placedOnBoard: true,
            };
        }
        return cards;
    }
    private setCardId(id: number, card: ICardProps){
        card.id = id;
    }
    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
}