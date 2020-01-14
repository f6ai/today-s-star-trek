import React from 'react';

import MainContent from '../../components/main-content/main-content.component';
import Header from '../../components/header/header.component';

const aboutText = (
  <p style={{ fontSize: '4.5rem' }}>
    We are enthusiastic Star Trek fans who like to experiment with AI and web
    development. The episodes were generated via GPT-2 natural language
    generation model trained on real Star Trek episode summaries collected from
    Wikipedia and IMDb. Check out our Github repos for more info:
    <ul style={{ paddingLeft: '5rem' }}>
      <li>
        <a
          style={{ color: 'inherit' }}
          href='https://github.com/karoly-hars/gpt2_episode_summary_generator'
        >
          karolyhars's summary generator
        </a>
      </li>
      <li>
        <a
          style={{ color: 'inherit' }}
          href='https://github.com/f6ai/today-s-star-trek'
        >
          this webpage's repo
        </a>
      </li>
    </ul>
  </p>
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
