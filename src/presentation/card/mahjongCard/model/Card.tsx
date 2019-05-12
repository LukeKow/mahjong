import ICardProps from "./ICardProps";
import * as React from 'react';
import '../style/Card.css';

export default class Card extends React.Component<ICardProps>{

    constructor(props: ICardProps) {
        super(props);
    }

    public render() {
        return (
            // <div className="card" onClick={this.handleClick} >
            <div className="card">
                {this.renderCard()}
            </div>
        );
    }

    // private handleClick = () => {
    //     this.props.handleClick(this.props.id);
    // }

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
