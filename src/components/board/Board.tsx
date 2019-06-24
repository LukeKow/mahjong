import * as React from 'react';
import IBoardProps from './IBoardProps';
import IBoardInjectedProps from './IBoardIncjectedProps';
import { observer, inject } from 'mobx-react';
import './Board.css';
import Card from 'src/model/Card/Card';

@inject('cardStore')
@observer
export default class Board extends React.Component<IBoardProps, {}>{
    constructor(props: IBoardProps) {
        super(props);
        this.cardClickedHandler = this.cardClickedHandler.bind(this);
    }
    get injectedProps() {
        return this.props as IBoardInjectedProps;
    }

    get store() {
        return this.injectedProps.cardStore;
    }

    componentDidMount() {
        this.injectedProps.cardStore.loadCards();
    }

    cardClickedHandler(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        let id = Number.parseInt((event as any)._targetInst.key);
        this.store.handleCardClick(id);
    }

    render() {
        const cardsFromStore = this.injectedProps.cardStore.cards;
        return (
            <div className={'board fourOnFourBoard'}>
                {cardsFromStore && this.injectedProps.cardStore.cards.map((card) => {
                    return <div
                        className="card"
                        key={card.id}
                        onClick={this.cardClickedHandler}>
                        <div className='cardValue'>
                            {this.renderCard(card)}
                        </div>
                    </div>
                })}
            </div>
        );
    }

    renderCard(card: Card): JSX.Element{
        if(!card.inGame){
            return(<div> :-) </div>)
        } else {
            return <div>{card.isHeadsUp ? card.heads : card.tails}</div>;
        }
    }
}