import React, { Component, ReactChild, createRef } from 'react';
import Section from '../Section';
import Text from '../Text';
import Container from '../Container';

import styles from './TitleNavSection.module.css';

class TitleNavSection extends Component {
  state = {
    fix: false,
  }

  contentRef = createRef<HTMLDivElement>()

  componentDidMount() {
    document.addEventListener('scroll', (e) => {
      console.log(e);
    });
  }

  componentWillUnmount() {

  }

  wrapper(content: ReactChild) {
    if (this.state.fix) {
      return (
        <div className={styles.fixed}>
          {content}
        </div>
      );
    }

    return (
      <Container>
        {content}
      </Container>
    );
  }

  render() {
    const content = (
      <div className={styles.TitleNavSection} ref={this.contentRef}>
        <Section>
          <div className={styles.names}>
            <Text size="large">CARRIE & CARTER</Text>
          </div>
          <hr className={styles.line} />
          <div className={styles.date}>
            <Text size="medium">June 22, 2019</Text>
          </div>
          <div className={styles.location}>
            <Text size="medium">Santa Fe, New Mexico</Text>
          </div>
        </Section>
      </div>
      );
    return this.wrapper(content);
  }
}

export default TitleNavSection;
