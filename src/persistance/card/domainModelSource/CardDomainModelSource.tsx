import ICardDomainModel from 'src/domain/card/ICardDomainModel';
import ICardDomainModelSource from './ICardDomainModelSource';

export default class CardDomainModelSource implements ICardDomainModelSource {
    async getCards(): Promise<Array<ICardDomainModel>> {
        let cards = new Promise<Array<ICardDomainModel>>((resolve, reject) => {
            setTimeout(() => 
                resolve(new Array<ICardDomainModel>(
                    { id: 0, headsOnTop: false, headsValue: "One", tailsValue: "[Mahjong]", playable: true, placedOnBoard: true },
                    { id: 1, headsOnTop: false, headsValue: "Two", tailsValue: "[Mahjong]", playable: true, placedOnBoard: true },
                    { id: 2, headsOnTop: false, headsValue: "One", tailsValue: "[Mahjong]", playable: true, placedOnBoard: true },
                    { id: 3, headsOnTop: false, headsValue: "Two", tailsValue: "[Mahjong]", playable: true, placedOnBoard: true }
                )
            ), 1000);
          });
        let result: Array<ICardDomainModel> = await cards;
        return result;
    }
}