import ICardAppModel from '../ICardAppModel';

export default class CardMahjongModel implements ICardAppModel{
    id: number;    
    headsOnTop: boolean;
    headsValue: string;
    playable: boolean;
    handleClick: Function;
    placedOnBoard: boolean;    
}