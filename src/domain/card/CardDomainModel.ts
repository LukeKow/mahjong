import ICardDomainModel from './ICardDomainModel';

export default class CardDomainModel implements ICardDomainModel{
    id: number;    
    headsOnTop: boolean;
    headsValue: string;
    playable: boolean;
    placedOnBoard: boolean;    
}