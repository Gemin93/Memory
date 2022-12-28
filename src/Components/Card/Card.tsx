import React, {FC} from 'react';
import './Card.css';
import kc from '../../image/kc.svg'

interface Props {
    id:number;
    pic: string;
    select: boolean;
    done: boolean;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Card: FC<Props> = ({id,pic, select,done,onClick}) =>{
    return(
        <li
            className={`card ${done ? 'done' : ''} ${select ? 'selected': ''}`}
            data-id={id}
            onClick={onClick}
        >
            <img
                key={id}
                className="card__img"
                src={select ? pic : kc}
                alt="logo KC" />
        </li>

    )
}