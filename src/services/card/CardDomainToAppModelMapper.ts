import ICardDomainToAppModelMapper from './ICardDomainToAppModelMapper';
import ICardDomainModel from 'src/domain/card/ICardDomainModel';
import ICardAppModel from 'src/application/card/ICardAppModel';

export default class CardDomainToAppModelMapper implements ICardDomainToAppModelMapper{
    map(card: ICardDomainModel): ICardAppModel {
        throw new Error("Method not implemented.");
    }
    
}