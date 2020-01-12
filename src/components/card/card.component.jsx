import React from 'react';

import './card.styles.scss';

const Card = props => {
  return (
    <div className='card'>
      <p className='card__text'>{props.text}</p>
    </div>
  );
};

export default Card;
