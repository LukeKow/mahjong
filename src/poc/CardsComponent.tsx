import * as React from 'react';
import {observer, inject} from 'mobx-react';
// import CardsStore from './CardsStore';
import ICardsComponentProps from './ICardsComponentProps';

@inject('store')
@observer
export default class CardsComponent extends React.Component<ICardsComponentProps,{}>{
private headsValue: string = '';
private isHeadsUp: any = false;
private id: number = 0;
    handleCardClick = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        console.log(event.target);
    }
    handleHeadsCHange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.headsValue = e.target.value;
    }
    handleHeadsUpChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.isHeadsUp=e.target.value;
    }
handleIdCHange=(e:React.ChangeEvent<HTMLInputElement>)=>{
this.id= Number.parseInt( e.target.value);
}
    handleSubmit=(event: React.FormEvent<any>)=>{
        event.preventDefault();
        this.props.store?this.props.store.pushCard(
            {
                id: this.id,
                headsValue: this.headsValue,
                isHeadsUp: this.isHeadsUp

            }
        )
        :console.log(event);
    }
    public render(){
        const {store}=this.props;
        return(
            store &&
            <div>
                <ul>{store.cards}
                    {store.cards.map(card => 
                        (<li key={card.id} onClick={this.handleCardClick}>{card.isHeadsUp ? card.headsValue : "TAILS"}</li>)
                    )}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='heads value' onChange={this.handleHeadsCHange}/>
                    <input type='number' placeholder='id value'/>
                    <input type='checkbox' placeholder='is heads up'/>
                    <button type='submit'>submit</button>
                </form>
                
            </div>
        );
    }
}