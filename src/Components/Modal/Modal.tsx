import React, {FC} from "react";
import './Modal.css';

interface Props {
    resultGame: boolean;
    countOfMoves?: number;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Modal: FC<Props> = ({resultGame, countOfMoves, onClick}) => {
    return (
        <div className="modal">
            <div className='modal-container'>

            {resultGame ?
                (<div className='modal__info'>
                        <p className='modal__text'>Ура, вы выиграли</p>
                        <p className='modal__text'>{`Это заняло ${countOfMoves} ходов`}</p>
                </div>)
                : (<div className='modal__info'>
                    <p className='modal__text'>Увы, вы проиграли</p>
                    <p className='modal__text'>У вас закончились ходы</p>
                </div>)
            }

            <button className='modal__button' onClick={onClick} >Сыграть ещё</button>
            </div>
        </div>
    );

};