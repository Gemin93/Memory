import React, {FC} from 'react';
import './Info.css';

interface Props {
    className?: string;
    infoType: string;
    moves: number;
}

export const Info: FC<Props> = ({infoType,className= '', moves}) => {
  return(
      <div className={`info ${className}`}>
          <p className="info__text">{infoType}</p>
          <p className="info__number">{moves}</p>
      </div>
  )
}