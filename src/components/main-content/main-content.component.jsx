import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../card/card.component';

import './main-content.styles.scss';

const MainContent = ({ text, navigation }) => {
  return (
    <main className='main'>
      <div className='topLeft'></div>

      <div className='topMiddle'></div>

      {/* <a className='topMiddle' href='/'>
        <p className='topMiddle__text'>Generate new</p>
      </a> */}

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
