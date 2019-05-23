import ICardService from './ICardService'
import ICardProps from 'src/domain/card/model/ICardProps';
// import ICardForBoardGetter from './ICardForBoardGetter';
// import MahjongCardForBoardGetter from './MahjongCardForBoardGetter';

export default class CardService implements ICardService {
    // private cardsGetter: ICardForBoardGetter;
    
    // constructor(boardSize: number){
    //     this.cardsGetter = new MahjongCardForBoardGetter(boardSize);
    // }
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
                placedOnBoard: false,
            });
            cards.push({
                id: i+1,
                headsOnTop: false,
                headsValue: `[ ${(i+1).toString()} ]`,
                tailsValue: '[M A H J O N G]',
                playable: true,
                handleClick: ()=>{},
                placedOnBoard: false,
            });
        }
        return cards;
    }

    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    // async getCards(handleCardClick: Function): Promise<Array<ICardProps>> {
    //     let cards = this.cardsGetter.getCards().then((cards) => {
    //         cards.forEach((card) => {
    //             card.handleClick = handleCardClick;
    //         });
    //         return cards;
    //     });
    //     // let cardsa = new Promise<Array<ICardProps>>((resolve, reject) => {
    //     //     setTimeout(() => 
    //     //         resolve(new Array<ICardProps>(
    //     //             { id: 0, headsOnTop: false, headsValue: "One", tailsValue:'[MAHJONG]', playable: true, placedOnBoard: true, handleClick:handleCardClick },
    //     //             { id: 1, headsOnTop: false, headsValue: "Two", tailsValue:'[MAHJONG]', playable: true, placedOnBoard: true, handleClick:handleCardClick },
    //     //             { id: 2, headsOnTop: false, headsValue: "One", tailsValue:'[MAHJONG]', playable: true, placedOnBoard: true, handleClick:handleCardClick },
    //     //             { id: 3, headsOnTop: false, headsValue: "Two", tailsValue:'[MAHJONG]', playable: true, placedOnBoard: true, handleClick:handleCardClick }
    //     //         )
    //     //     ), 1000);
    //     //   });
    //     let result: Array<ICardProps> = await cards;
    //     return result;
    // }
}