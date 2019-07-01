const BoardCssClass = (cardsCount: number) => {
    switch(cardsCount){
        case 4: 
            return 'fourCardsBoard';
        case 16:
            return 'sixteenCardsBoard';
        case 36:
            return 'thirtysixCardsBoard';
        default:
            return 0;
    }
}

export default BoardCssClass;