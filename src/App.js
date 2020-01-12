import React from 'react';

import MainContent from './components/main-content/main-content.component';
import Header from './components/header/header.component';

import { firestore } from './firebase/firebase.utils';

// import { addCollectionAndDocuments } from './firebase/firebase.utils';
// import DATA_BATCH_0 from './data/data_batch_0';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  componentDidMount() {
    // PUSH DATA TO FIRESTORE
    // don't want all properties of object only the episode_summary
    // addCollectionAndDocuments('test', DATA_BATCH_0);

    // on every page load, pull today's star trek episode
    this.createCollectionRef(this.getData);
    this.getDay();
  }

  createCollectionRef(func) {
    const collectionRef = firestore.collection('test');
    collectionRef.onSnapshot(async snapshot => {
      func(snapshot);
    });
  }

  getDay() {
    let today = new Date();
    // format: month/day/year
    const startDay = new Date('01/12/2020');
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
      <div className='app'>
        <Header />
        <MainContent text={this.state.text} />
      </div>
    );
  }
}

export default App;
