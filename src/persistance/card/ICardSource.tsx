import ICard from 'src/domain/card/ICard';

export default interface ICardSource{
    getCards (): Promise<Array<ICard>>;
}