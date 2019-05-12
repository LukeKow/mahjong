export default interface ICardAppModel{
    id: number;
    headsOnTop: boolean;
    headsValue: string;
    playable: boolean;
    handleClick: Function;
    placedOnBoard: boolean;
}