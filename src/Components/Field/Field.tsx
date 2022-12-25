import React, {FC} from 'react';
import './Field.css';
import {Card} from "../Card/Card";
import {FieldStatus} from "../../types";


interface Props {
    cards: FieldStatus;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}


export const Field: FC<Props> = ({cards, onClick}) => {
    return (
        <div className="field">
            <ul className="field__cards">

                {cards.map((item,index) => {
                    return (
                        <Card key={index} id={index} pic={item.image} select={item.select} done={item.done} onClick={onClick}/>
                    )
                })}

            </ul>
        </div>
    );

};