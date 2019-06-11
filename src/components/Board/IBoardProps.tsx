import ICardProps from 'src/components/Card/ICardProps';

export default interface IBoardProps{
    cards: Array<ICardProps>;
    size: number;
}