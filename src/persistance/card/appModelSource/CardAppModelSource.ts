import ICardAppModelSource from './ICardAppModelSource';
import ICardDomainToAppModelMapper from 'src/services/card/ICardDomainToAppModelMapper';
import ICardDomainModelSource from '../domainModelSource/ICardDomainModelSource';

export default class CardAppModelSource implements ICardAppModelSource{

    private domainModelSource: ICardDomainModelSource;
    private domainToAppModelMapper: ICardDomainToAppModelMapper;
    constructor(domainModelSource: ICardDomainModelSource, domainToAppModelMapper: ICardDomainToAppModelMapper){
        this.domainModelSource = domainModelSource;
        this.domainToAppModelMapper = domainToAppModelMapper;
    }
}