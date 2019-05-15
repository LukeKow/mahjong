import ICardDomainToAppModelMapper from './ICardDomainToAppModelMapper';
import ICardDomainModel from 'src/domain/card/ICardDomainModel';
import ICardAppModel from 'src/application/card/ICardAppModel';

export default class CardDomainToAppModelMapper implements ICardDomainToAppModelMapper{
    map(card: ICardDomainModel, handleClick: Function): ICardAppModel {
        return { handleClick: handleClick, ...card };
    }    
}