import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class Home extends React.Component<RouteComponentProps,{}>{
    private clickHandler = () => {
        this.props.history.push("/board");
    }

    render(){
        return(
            <div>
                <div>HOME PAGE</div>
                <div><button onClick={this.clickHandler}>Board</button></div>
            </div>
            
        );
    }
}

export default withRouter(Home);
