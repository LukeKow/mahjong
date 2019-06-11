export default interface ICardProps {
    id: number;
    headsOnTop: boolean;
    headsValue: string;
    tailsValue: string;
    playable: boolean;
    handleClick: Function;
    placedOnBoard: boolean;
    
}