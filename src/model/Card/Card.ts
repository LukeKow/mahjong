import { observable, action } from 'mobx';

export default class Card{
    id: number;
    heads: string;
    tails: string;

    @observable
    isHeadsUp: boolean;
    playable: boolean;
    @observable
    inGame: boolean;
    
    @action
    toggleCardSide = () => {
        this.isHeadsUp = !this.isHeadsUp;
    }

    constructor(id: number, heads: string, tails: string, isHeadsUp: boolean, playable: boolean, inGame: boolean){
        this.id= id;
        this.heads = heads;
        this.tails = tails;
        this.isHeadsUp = isHeadsUp;
        this.playable = playable;
        this.inGame = inGame;
    }
}