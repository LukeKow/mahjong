import ICard from './ICard';

export default class Card implements ICard{
    id: number;    
    headsOnTop: boolean;
    headsValue: string;
    playable: boolean;
    placedOnBoard: boolean;    
}