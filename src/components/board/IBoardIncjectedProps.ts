import IBoardProps from './IBoardProps';
import CardsStore from '../../stores/cardsStore/CardsStore';

export default interface IBoardInjectedProps extends IBoardProps{
    cardStore: CardsStore;
}