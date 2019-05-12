import ICardDomainModel from 'src/domain/card/ICardDomainModel';
import ICardAppModel from 'src/application/card/ICardAppModel';

export default interface ICardDomainToAppModelMapper{
    map (card: ICardDomainModel): ICardAppModel;
}