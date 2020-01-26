import React from 'react';

import MainContent from '../../components/main-content/main-content.component';
import Header from '../../components/header/header.component';

const aboutText = (
  <div style={{ fontSize: '4.5rem' }}>
    We are enthusiastic Star Trek fans who like to experiment with AI and web
    development. The episodes were generated via GPT-2 natural language
    generation model trained on real Star Trek episode summaries collected from
    Wikipedia and IMDb. Check out our Github repos for more info:
    <ul style={{ paddingLeft: '5rem' }}>
      <li>
        <a
          style={{ color: 'inherit' }}
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/karoly-hars/gpt2_episode_summary_generator'
        >
          karoly-hars' summary generator
        </a>
      </li>
      <li>
        <a
          style={{ color: 'inherit' }}
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/f6ai/today-s-star-trek'
        >
          this webpage's repo
        </a>
      </li>
    </ul>
  </div>
);

const About = ({ navigation }) => {
  return (
    <>
      <Header />
      <MainContent text={aboutText} navigation={navigation} />
    </>
  );
};

export default About;
