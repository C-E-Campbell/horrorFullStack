import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Landing.module.scss';
import { Link } from 'react-router-dom';
export default function Landing() {
  return (
    <div>
      <Header />
      <section className={styles.heroSection}>
        <h1>Can you live through the challenge?</h1>
        <p>
          <span>Tempt Fate. </span>Take the 100 day horror movie challenge.
        </p>
        <Link to="/signin">THE RULES</Link>
      </section>
    </div>
  );
}
