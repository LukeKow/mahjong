import ICardProps from "./ICardProps";
import * as React from 'react';
import './style/Card.css';

const Card = (props: ICardProps) => {

    const handleClick = () => props.handleClick(props.id);

    const renderCard = () => {
        return props.headsOnTop ?
            renderHeadsOnTop() :
            renderTailsOnTop();
    }

    const renderTailsOnTop = (): JSX.Element => {
        return (
            <div className="cardValue">
                { props.tailsValue }
            </div>
        );
    }

    const renderHeadsOnTop = (): JSX.Element => {
        return (
            <div className="cardValue">
                { props.headsValue }
            </div>
        );
    }

    return(
        <div className="card" onClick={handleClick} >
                {renderCard()}
        </div>
    );
}
export default Card;

// class Card extends React.Component<ICardProps>{

//     constructor(props: ICardProps) {
//         super(props);

//         this.handleClick = this.handleClick.bind(this);
//     }

//     public render() {
//         return (
//             <div className="card" onClick={this.handleClick} >
//                 {this.renderCard()}
//             </div>
//         );
//     }

//     private handleClick = () => {
//         this.props.handleClick(this.props.id);
//     }

//     private renderCard() {
//         return this.props.headsOnTop ?
//             this.renderHeadsOnTop() :
//             this.renderTailsOnTop();
//     }
//     private renderTailsOnTop = (): JSX.Element => {
//         return (
//             <div className="cardValue">
//                 {this.props.tailsValue}
//             </div>
//         );
//     }
//     private renderHeadsOnTop = (): JSX.Element => {
//         return (
//             <div className="cardValue">
//                 {this.props.headsValue}
//             </div>
//         );
//     }
// }
