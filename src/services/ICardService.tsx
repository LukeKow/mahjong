import ICardProps from 'src/domain/card/model/ICardProps';

export default interface ICardService{
    getCards (handleCardClick: Function): Promise<Array<ICardProps>>;
}