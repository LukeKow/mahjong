import ICardProps from 'src/presentation/card/mahjongCard/model/ICardProps';

export default interface IBoardState{
    cards: Array<ICardProps>;
    isLoadingCards: boolean;
}