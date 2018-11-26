import React, { Component } from 'react';
import styles from './App.module.css';
import Container from './Container';
import TitleNavSection from './sections/TitleNavSection';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Container>
          <TitleNavSection />
        </Container>
      </div>
    );
  }
}

export default App;
