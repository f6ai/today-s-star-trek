import React from 'react';

import MainContent from '../../components/main-content/main-content.component';
import Header from '../../components/header/header.component';

const HomePage = props => (
  <>
    <Header />
    <MainContent {...props} />
  </>
);

export default HomePage;
