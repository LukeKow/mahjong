import ICardProps from 'src/domain/card/model/ICardProps';

export default interface IBoardState{
    cards: Array<ICardProps>;
    size: number;
    isLoadingCards: boolean;
}