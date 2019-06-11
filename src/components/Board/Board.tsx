import * as React from 'react';
import Card from 'src/components/Card/Card';
import './style/Board.css';
import IBoardProps from './IBoardProps';

export default class Board extends React.Component<IBoardProps,{}>{

  constructor(props: IBoardProps) {
    super(props);
  }

  public render() {
    let boardCssClassName = this.getBoardCssClass();
    return (
      <div className={`board ${boardCssClassName}`}>
        {this.props.cards.map((card, index) => {
          if (card.placedOnBoard) {
            return <Card key={card.id} {...card} />
          }
          else {
            return <div key={index} className='card'> :-) </div>
          }
        })}
      </div>
    );
  }

  private getBoardCssClass(): string {
    switch (this.props.size.toString()) {
      case '2':
        return 'twoOntwoBoard';
      case '4':
        return 'fourOnFourBoard';
      case '6':
        return 'sixOnSixBoard';
      default:
        return '';
    }
  }
}