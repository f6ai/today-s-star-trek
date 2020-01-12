import React from 'react';

import { firestore } from '../../firebase/firebase.utils';

import './card.styles.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    const collectionRef = firestore.collection('test');
    collectionRef.onSnapshot(async snapshot => {
      this.getData(snapshot);
    });
    this.getDay();
  }

  getDay() {
    let today = new Date();
    // format: month/day/year
    const startDay = new Date('01/05/2020');
    let diffDays = parseInt((today - startDay) / (1000 * 60 * 60 * 24), 10);
    return diffDays;
  }

  // pull data from firebase based on day from the startDay
  getData = collections => {
    let day = this.getDay();
    if (day === collections.docs.length) {
      this.setState({ text: 'No more Star Trek.' });
    }
    const data = collections.docs[day].data().episode_summary;
    this.setState({ text: data });
  };

  render() {
    return (
      <div className='card'>
        <p className='card__text'>{this.state.text}</p>
      </div>
    );
  }
}

export default Card;
