import ICardAppModelSource from './ICardAppModelSource';
import ICardDomainToAppModelMapper from 'src/services/card/ICardDomainToAppModelMapper';
import ICardDomainModelSource from '../domainModelSource/ICardDomainModelSource';
import ICardAppModel from 'src/application/card/ICardAppModel';

export default class CardAppModelSource implements ICardAppModelSource{
    private domainModelSource: ICardDomainModelSource;
    private domainToAppModelMapper: ICardDomainToAppModelMapper;

    constructor(domainModelSource: ICardDomainModelSource, domainToAppModelMapper: ICardDomainToAppModelMapper){
        this.domainModelSource = domainModelSource;
        this.domainToAppModelMapper = domainToAppModelMapper;
    }

    getCards(handleCardClick: Function): Promise<ICardAppModel[]> {
        return this.domainModelSource.getCards().then((domainModelArray) => {
            return domainModelArray.map((domainModel) => {
                return this.domainToAppModelMapper.map(domainModel, handleCardClick);
            });
        });
    }
}