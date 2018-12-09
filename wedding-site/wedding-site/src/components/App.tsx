import React, { Component } from 'react';
import styles from './App.module.css';
import Container from './Container';
import TitleNavSection from './sections/TitleNavSection';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <TitleNavSection />
        <Container>
          <div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
