import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Board from '../board/Board';
import Home from '../home/Home';
export default class Main extends React.Component<{},{}> {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/board/:cardsAmount" component={Board} />           
                </div>
            </Router>
        );
    }
}