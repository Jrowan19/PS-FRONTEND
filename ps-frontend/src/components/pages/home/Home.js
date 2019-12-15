import React from 'react';
import styles from './Home.module.css';
import { Link } from '@reach/router';

const Home = () => {
  return (
    <div className={styles.background_container}>
      <div className={styles.welcome}>
        <button className="btn btn-primary">
          <Link className="nav-link text-white h3" to="/games">
            View Games Library
          </Link>
        </button>
      </div>
      <div className={styles.station}></div>
    </div>
  );
};

export default Home;
