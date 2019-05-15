import IBoardDomainModel from './IBoardDomainModel';
import ICardDomainModel from '../card/ICardDomainModel';

export default class BoardDomainModel implements IBoardDomainModel{
    cards: ICardDomainModel[];

}