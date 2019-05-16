import ICardAppModel from 'src/application/card/ICardAppModel';

export default interface ICardAppModelSource{
    getCards(handleCardClick: Function): Promise<ICardAppModel[]>;
}