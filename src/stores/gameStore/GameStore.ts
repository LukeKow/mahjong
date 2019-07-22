import { observable, action, computed } from 'mobx';

export default class GameStore {

    @computed
    getGameState = (): string => {
        // some logic computin game state based on cards array state and other game rules - TODO
        // throw "Not implemented method exception";
        // if(this.isGameFinished()){
        //     throw "implement gameFinished component";
        // }
        // else if(this.isGameInProgress()){
        //     throw "implement gameInProgress component";
        // }
        // else{
        //     throw "implement game not started component";
        // }
    }

    private isGameFinished = (): boolean => {
        throw "Not implemented method exception";
    }

    private isGameInProgress = () : boolean => {
        throw "Not implemented method exception";
    }

}