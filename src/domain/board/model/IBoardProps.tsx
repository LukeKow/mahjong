import ICardProps from 'src/domain/card/model/ICardProps';

export default interface IBoardProps{
    cards: Array<ICardProps>;
    size: number;
}