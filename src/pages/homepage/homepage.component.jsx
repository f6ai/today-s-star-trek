import React from 'react';

import MainContent from '../../components/main-content/main-content.component';
import Header from '../../components/header/header.component';

const HomePage = ({ text, navigation }) => (
  <>
    <Header />
    <MainContent text={text} navigation={navigation} />
  </>
);

export default HomePage;
