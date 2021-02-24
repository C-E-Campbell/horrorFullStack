import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.innerHeaderContainer}>
        <Link to="/">
          <div className={styles.header_Logo_Btn}></div>
        </Link>

        <div className={styles.linkContainer}>
          {false ? (
            <>
              <Link to="/login">Dashboard</Link>
              <Link to="/journal">Spill Your Guts</Link>
            </>
          ) : (
            <>
              <Link to="/login">Sign in</Link>
              <Link to="/signup">Sign up</Link>
              <Link to="/dashboard">Dashboard</Link>
            </>
          )}
        </div>
        <div onClick={() => setToggle(!toggle)} className={styles.toggle}>
          Toggle
        </div>
      </div>
    </div>
  );
};

export default Header;
