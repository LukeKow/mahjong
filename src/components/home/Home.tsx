import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Options from '../options/Options';

class Home extends React.Component<RouteComponentProps,{}>{

    render() {
        return(
            <div>
                <h1>MAHJONG</h1>
                <Options/>                
            </div>            
        );
    }
}
export default withRouter(Home);
