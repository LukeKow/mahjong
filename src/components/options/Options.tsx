import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class Options extends React.Component<RouteComponentProps,{}>{

    private numberOfCards: number = 4;

    handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let selectedString = event.currentTarget.options[event.currentTarget.selectedIndex].value;
        this.numberOfCards = Math.pow(Number.parseInt(selectedString), 2);
    }

    private renderBoard = () => {
        console.log(this.numberOfCards);
        this.props.history.push(`/board/${this.numberOfCards}`);

    }

    render() {
        return(
            <div>
                <select onChange={this.handleSelectChange}>
                    <option value="2">2 x 2</option>
                    <option value="4">4 x 4</option>
                    <option value="6">6 x 6</option>
                </select>
                <div><button onClick={this.renderBoard}>Start game</button></div>
            </div>
        );
    }
}
export default withRouter(Options)