import ICardProps from 'src/domain/card/model/ICardProps';

export default interface ICardForBoardGetter{
    getCards(): Promise<ICardProps[]>;
}