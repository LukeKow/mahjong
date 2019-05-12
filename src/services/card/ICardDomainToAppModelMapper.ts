import ICard from 'src/domain/card/ICard';

export default interface ICardDomainToAppModelMapper{
    map (card: ICard): ICardAppModel;
}