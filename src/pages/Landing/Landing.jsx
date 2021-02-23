import React, { useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import styles from './Landing.module.scss';
import { Link } from 'react-router-dom';
export default function Landing() {
  return (
    <div>
      <Header />
      <section className={styles.heroSection}>
        <div>
          <h1>Can you live through the challenge?</h1>
          <p>
            <span>Tempt Fate. </span>Take the 100 day horror movie challenge.
          </p>
          <Link to="/signin">THE RULES</Link>
        </div>
      </section>

      <section className={styles.rules_section}>
        <h2>The Rules</h2>
        <div className={styles.rules_InnerContainer}>
          <div className={styles.rules_textContainer}>
            <p>
              Watch 100 horror movies in 100 days...<br></br>or a year, you
              choose!
            </p>
            <div className={styles.rules_buttonsContainer}>
              <div>Easy</div>
              <div>Murder Me!</div>
            </div>
          </div>
          <div className={styles.rules_moviesContainer}>
            <div>movie 1</div>
            <div>movie 2</div>
            <div>movie 3</div>
            <div>movie 4</div>
          </div>
        </div>
      </section>

      <footer></footer>
    </div>
  );
}
