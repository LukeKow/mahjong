import IBoardDomainModel from 'src/domain/board/IBoardDomainModel';
import ICardAppModel from '../card/ICardAppModel';
import ICardAppModelSource from 'src/persistance/card/appModelSource/ICardAppModelSource';
import ICardDomainToAppModelMapper from 'src/services/card/ICardDomainToAppModelMapper';

export default interface IBoardAppModel extends IBoardDomainModel{
   handleClick: Function;
   cards: ICardAppModel[];
   cardsSource: ICardAppModelSource;
   cardMapper: ICardDomainToAppModelMapper;
}