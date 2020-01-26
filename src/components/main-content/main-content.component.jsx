import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../card/card.component';

import './main-content.styles.scss';

const MainContent = ({ navigation, text, click }) => {
  return (
    <main className='main'>
      <div className='topLeft'></div>

      <div className='topMiddle'>
        <p className='topMiddle__text' onClick={click}>
          Next Generation
        </p>
      </div>

      {navigation === 'About us' ? (
        <Link className='topRight' to='/about'>
          <p className='topRight__text'>{navigation}</p>
        </Link>
      ) : (
        <Link className='topRight' to='/'>
          <p className='topRight__text'>{navigation}</p>
        </Link>
      )}

      <div className='sidebar--top'></div>
      <div className='sidebar--middle'></div>
      <div className='sidebar--bottom'></div>
      <div className='bottom'></div>
      <div className='main__container'>
        <Card text={text} />
      </div>
    </main>
  );
};

export default MainContent;
