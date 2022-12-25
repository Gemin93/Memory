import React from 'react';
import './App.css';
import {Field} from "../Field/Field";
import {Info} from "../Info/Info";
import { dblCardArray, shuffleCards } from "../../utils";
import {FieldStatus} from "../../types";


//полчение массива карточек
function generateCards(): FieldStatus{
        //перемешивание массива
        const shuffledCards = shuffleCards(dblCardArray);
        //в новый массив записываем картинку из перемешенного массива
        //и тут же выставляем все карты рубашкой вверх
        const resultField: FieldStatus = [];
        shuffledCards.forEach((image) => resultField.push({image: image, select: false, done: false }));
        return (resultField);

}

export const App = () =>{

    const [flippedCard, setFlippedCard] = React.useState(false);  // перевернута карта или нет
    const [cards, setCards] = React.useState(generateCards());

    const onCardClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();}

    return (
        <React.Fragment>
            <div className="container">
                <h1 className="title">Memory</h1>
                <div className="wrapper">
                    <Info
                        infoType="сделано ходов"
                        className="moves__made"/>
                    <Field cards={cards} onClick={onCardClick} />
                    <Info
                        infoType="ходов осталось"
                        className="moves__left" />
                </div>
            </div>
        </React.Fragment>
    );
}