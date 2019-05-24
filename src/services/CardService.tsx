import ICardService from './ICardService'
import ICardProps from 'src/domain/card/model/ICardProps';

export default class CardService implements ICardService {
    private totalNumberOfCards: number;

    constructor(boardSize: number){
        this.totalNumberOfCards = boardSize * boardSize;
    }    

    async getCards(): Promise<ICardProps[]> {
        let cards: ICardProps[] = this.getCardsArray();
        let indexes: number[] = this.getIndexes();
        let getRandomlyArrangedCards: Promise<ICardProps[]> =  new Promise<ICardProps[]>((resolve, reject) => {
            setTimeout(() => {
                let randomlyArrangedCards: ICardProps[] = [];
                for(let i = indexes.length-1; i >= 0; i--){
                    let indexDraw = this.getRandomInt(0, i);
                    indexes.splice(indexDraw, 1)[0];
                    randomlyArrangedCards.push(cards.splice(indexDraw, 1)[0]);
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

    private getCardsArray(): ICardProps[]{
        let cards: ICardProps[] = [];
        for(let i = 0; i < this.totalNumberOfCards; i+=2){
            cards.push({
                id: i,
                headsOnTop: false,
                headsValue: `[ ${(i+1).toString()} ]`,
                tailsValue: '[M A H J O N G]',
                playable: true,
                handleClick: ()=>{},
                placedOnBoard: true,
            });
            cards.push({
                id: i+1,
                headsOnTop: false,
                headsValue: `[ ${(i+1).toString()} ]`,
                tailsValue: '[M A H J O N G]',
                playable: true,
                handleClick: ()=>{},
                placedOnBoard: true,
            });
        }
        return cards;
    }

    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
}