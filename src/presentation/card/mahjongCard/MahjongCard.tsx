import * as React from 'react';
import '../style/Card.css';
import ICardAppModel from 'src/application/card/ICardAppModel';

export default class MahjongCard extends React.Component<ICardAppModel>{

    constructor(props: ICardAppModel) {
        super(props);
    }

    public render() {
        return (
            <div className="card" onClick={this.handleClick} >
                {this.renderCard()}
            </div>
        );
    }

    private handleClick = () => {
        this.props.handleClick(this.props.id);
    }

    private renderCard() {
        return this.props.headsOnTop ?
            this.renderHeadsOnTop() :
            this.renderTailsOnTop();
    }
    private renderTailsOnTop = (): JSX.Element => {
        return (
            <div className="cardValue">
                X
            </div>
        );
    }
    private renderHeadsOnTop = (): JSX.Element => {
        return (
            <div className="cardValue">
                {this.props.headsValue}
            </div>
        );
    }
}
