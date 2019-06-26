import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import Card from 'src/model/Card/Card';
import IBoardProps from './IBoardProps';
import IBoardInjectedProps from './IBoardIncjectedProps';

import './Board.css';

@inject('cardStore')
@observer
class Board extends React.Component<IBoardProps & RouteComponentProps, {}>{
    constructor(props: IBoardProps & RouteComponentProps) {
        super(props);
        this.cardClickedHandler = this.cardClickedHandler.bind(this);
    }
    get injectedProps() {
        return this.props as IBoardProps as IBoardInjectedProps;
    }

    get store() {
        return this.injectedProps.cardStore;
    }

    get cardsAmount(){
        return Number.parseInt(
            (this.props.match.params as any).cardsAmount);
    }

    componentDidMount() {
        let tmp = Math.sqrt(this.cardsAmount);
        if(!Number.isInteger(tmp)) {
            this.props.history.push('/');
        } else {
            this.injectedProps.cardStore.loadCards(this.cardsAmount);
        }
    }

    cardClickedHandler(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        let id = Number.parseInt((event as any)._targetInst.key);
        this.store.handleCardClick(id);
    }

    render() {
        const cardsFromStore = this.injectedProps.cardStore.cards;
        const colNumber = Math.sqrt(this.cardsAmount);
        const colWidth = 90 / colNumber;
        const styles = {
            gridTemplateColumns: `repeat(${colNumber}, ${colWidth}%)`
        };
        return (
            <div className={'board'} style={styles}>
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
export default withRouter(Board);