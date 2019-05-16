import ICardDomainModel from 'src/domain/card/ICardDomainModel';

export default interface ICardAppModel extends ICardDomainModel{
   handleClick: Function;
}