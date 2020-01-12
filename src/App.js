import React from 'react';

import MainContent from './components/main-content/main-content.component';
import Header from './components/header/header.component';
// import { addCollectionAndDocuments } from './firebase/firebase.utils';
// import EP_SUMMARY_DATA from './data/ep-summary-data';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    // don't want all properties of object only the episode_summary
    // addCollectionAndDocuments(
    //   'test',
    //   EP_SUMMARY_DATA.map(({ episode_summary }) => ({ episode_summary }))
    // );
  }
  render() {
    return (
      <div className='app'>
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;
