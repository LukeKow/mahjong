import ICardAppModel from 'src/application/card/ICardAppModel';

export default interface IBoardState{
    cards: Array<ICardAppModel>;
    isLoadingCards: boolean;
}