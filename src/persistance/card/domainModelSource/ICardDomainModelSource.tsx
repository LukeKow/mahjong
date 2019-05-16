import ICardDomainModel from 'src/domain/card/ICardDomainModel';

export default interface ICardDomainModelSource{
    getCards (): Promise<Array<ICardDomainModel>>;
}