import Card from '../model/Card/Card';

export default interface ICardService{
    getCards(cardsAmount: number): Promise<Array<Card>>;
}