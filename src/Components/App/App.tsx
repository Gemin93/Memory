import React from 'react';
import './App.css';
import {Field} from "../Field/Field";
import {Info} from "../Info/Info";
import { dblCardArray, shuffleCards } from "../../utils";
import {FieldStatus} from "../../types";
import {Modal} from "../Modal/Modal";


//получение массива карточек
function generateCards(): FieldStatus{
        //перемешивание массива
        const shuffledCards = shuffleCards(dblCardArray);
        //в новый массив записываем картинку из перемешенного массива
        //и тут же выставляем все карты рубашкой вверх
        const resultField: FieldStatus = [];
        shuffledCards.forEach((image, index) => resultField.push({id:index, image: image, select: false, done: false }));
        return (resultField);
}


export const App = () =>{

    const [cardId, setCardId] = React.useState<number | null>(null);
    const [selectedCard, setSelectedCard] = React.useState<FieldStatus>([]);
    const [cards, setCards] = React.useState(generateCards());
    const [foundPairs, setFoundPairs] = React.useState<number>(0);
    const [moves, setMoves] = React.useState<number>(0)

    const onCardClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        const id = e.currentTarget.dataset.id;
        if (!id) {
            return;
        }
        const idCard = parseInt(id);
        setCardId(idCard);
        const card = cards.find(card => card.id == idCard);
        if (card && selectedCard.length < 2){
            card.select = true;
            setSelectedCard([...selectedCard, card]);
            setMoves(moves + 1);
        }
    }

    const newGame = () => {
        setCards(generateCards());
        setFoundPairs(0);
        setMoves(0)
    }

    React.useEffect(() => {
        if (selectedCard.length === 2){
            const firstCard = selectedCard[0];
            const secondCard = selectedCard[1];
            if (firstCard.image !== secondCard.image){
                firstCard.select = false;
                secondCard.select = false;
                selectedCard.length = 0;
            } else {
                firstCard.done = true;
                secondCard.done = true;
                selectedCard.length = 0;
                setFoundPairs(foundPairs + 1);
            }
        }},[selectedCard]
    )

    return (
        <React.Fragment>
            <div className="container">
                <h1 className="title">Memory</h1>
                <div className="wrapper">
                    <Info
                        infoType="сделано ходов"
                        moves={moves}
                        className="moves__made"/>
                    <Field cards={cards} onClick={onCardClick} />
                    <Info
                        infoType="ходов осталось"
                        moves={40 - moves}
                        className="moves__left" />
                </div>
                {foundPairs === 8 ? <Modal resultGame={true} countOfMoves={moves} onClick={() => newGame()}/> : '' }
                {moves >= 40 ? <Modal resultGame={false} onClick={() => newGame()}/> : '' }

            </div>
        </React.Fragment>
    );
}