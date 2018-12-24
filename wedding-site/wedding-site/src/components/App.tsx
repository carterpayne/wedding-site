import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './App.module.css';
import Container from './Container';
import Nav from './Nav';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Nav />
          <Container>
            <Route exact path="/" component={Home} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
