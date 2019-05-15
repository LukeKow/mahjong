import IGameDomainModel from './IGameDomainModel';
import IBoardDomainModel from '../board/IBoardDomainModel';

export default class GameDomainModel implements IGameDomainModel{
    board: IBoardDomainModel;

}