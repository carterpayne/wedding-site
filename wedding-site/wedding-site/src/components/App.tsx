import React, { Component } from 'react';
import styles from './App.module.css';
import Section from './Section';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div className={styles.App} style={{ textAlign: 'center' }}>
        <Container>
          <Section><span style={{ fontSize: '62px', color: '#BB8463' }}>CARRIE & CARTER</span></Section>
        </Container>
      </div>
    );
  }
}

export default App;
