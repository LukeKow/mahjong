import ICardProps from 'src/components/Card/ICardProps';

export default interface ICardService{
    getCards (handleCardClick: Function): Promise<Array<ICardProps>>;
}