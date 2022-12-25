import React, {FC} from 'react';
import './Info.css';

interface Props {
    className?: string;
    infoType: string;
}

export const Info: FC<Props> = ({infoType,className= ''}) => {
  return(
      <div className={`info ${className}`}>
          <p className="info__text">{infoType}</p>
          <p className="info__number">28</p>
      </div>
  )
}