import ICardDomainModel from './ICardDomainModel';

export default class CardDomainModel implements ICardDomainModel{
    id: number;    
    headsOnTop: boolean;
    headsValue: string;
    tailsValue: string;
    playable: boolean;
    placedOnBoard: boolean;    
}