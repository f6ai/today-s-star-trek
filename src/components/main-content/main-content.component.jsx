import React from 'react';

import Card from '../card/card.component';

import './main-content.styles.scss';

const MainContent = () => {
  return (
    <main className='main'>
      <div className='topLeft'></div>

      <div className='topMiddle'></div>

      {/* <a className='topMiddle' href='/'>
        <p className='topMiddle__text'>Archive</p>
      </a> */}

      <a className='topRight' href='/'>
        <p className='topRight__text'>About us</p>
      </a>

      <div className='sidebar--top'></div>
      <div className='sidebar--middle'></div>
      <div className='sidebar--bottom'></div>
      <div className='bottom'></div>
      <div className='main__container'>
        <Card />
      </div>
    </main>
  );
};

export default MainContent;