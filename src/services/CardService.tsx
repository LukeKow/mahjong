import ICardService from './ICardService'
import ICardProps from 'src/domain/card/model/ICardProps';

export default class CardService implements ICardService {
    async getCards(handleCardClick: Function): Promise<Array<ICardProps>> {
        let cards = new Promise<Array<ICardProps>>((resolve, reject) => {
            setTimeout(() => 
                resolve(new Array<ICardProps>(
                    { id: 0, headsOnTop: false, headsValue: "One", playable: true, placedOnBoard: true, handleClick:handleCardClick },
                    { id: 1, headsOnTop: false, headsValue: "Two", playable: true, placedOnBoard: true, handleClick:handleCardClick },
                    { id: 2, headsOnTop: false, headsValue: "One", playable: true, placedOnBoard: true, handleClick:handleCardClick },
                    { id: 3, headsOnTop: false, headsValue: "Two", playable: true, placedOnBoard: true, handleClick:handleCardClick }
                )
            ), 1000);
          });
        let result: Array<ICardProps> = await cards;
        return result;
    }
}