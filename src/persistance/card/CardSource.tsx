import ICard from 'src/domain/card/ICard';
import ICardSource from './ICardSource';

export default class CardSource implements ICardSource {
    async getCards(): Promise<Array<ICard>> {
        let cards = new Promise<Array<ICard>>((resolve, reject) => {
            setTimeout(() => 
                resolve(new Array<ICard>(
                    { id: 0, headsOnTop: false, headsValue: "One", playable: true, placedOnBoard: true },
                    { id: 1, headsOnTop: false, headsValue: "Two", playable: true, placedOnBoard: true },
                    { id: 2, headsOnTop: false, headsValue: "One", playable: true, placedOnBoard: true },
                    { id: 3, headsOnTop: false, headsValue: "Two", playable: true, placedOnBoard: true }
                )
            ), 1000);
          });
        let result: Array<ICard> = await cards;
        return result;
    }
}