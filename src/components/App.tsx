import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './App.module.css';
import Container from './Container';
import Nav from './Nav';
import Home from './home';
import Accommodations from './accommodations';
import Directions from './directions';
import Registry from './registry';
import Activities from './activities';
import Things from './things';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Nav />
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/accommodations" component={Accommodations} />
            <Route path="/directions" component={Directions} />
            <Route path="/registry" component={Registry} />
            <Route path="/activities" component={Activities} />
            <Route path="/thingstodo" component={Things} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
