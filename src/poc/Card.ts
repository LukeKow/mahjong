import { action, observable } from 'mobx';

export default class Card{
    constructor(id: number, isHeadsUp: boolean, headsValue: string){
        this.id = id;
        this.isHeadsUp = isHeadsUp;
        this.headsValue = headsValue;
    }
    public id: number;
    
    @observable
    public isHeadsUp: boolean;
    public headsValue: string;

    @action
    public toggleIsHeadsUp(){
        this.isHeadsUp = !this.isHeadsUp;
    }
}