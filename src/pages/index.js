import React from 'react';

import Navbar from '../components/Navbar.js';

import '../common.module.css';
import styles from './index.module.css';

import me from '../img/stanton_parham_headshot.jpg';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div>
          <h1>Hello</h1>
          <p>My name is Stanton Parham.</p>
          <img src={me} alt='Stanton Parham' className={styles.mePic} loading='lazy' height='300' width='300' />
          <p>
            For the most part, I'm a software developer.  It's what I love to do, and I also
            consider myself to be quite good at it.  Honestly, I just enjoy engineering, building things, and
            solving problems in general.
          </p>
          <p>
            I received my BS in Computer Science and BA in International Studies from NC State University in December 2019.
            Currently, I'm back at NC State pursuing my Master's of Computer Science.
          </p>
          <p>
            For more professional information about me, check out <a href='https://www.linkedin.com/in/stparham'>my LinkedIn profile</a>.
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>Email: <a href='mailto:stan@stparham.com'>stan@stparham.com</a></p>
          <p>LinkedIn: <a href='https://www.linkedin.com/in/stparham'>linkedin.com/in/stparham</a></p>
          <p>GitHub: <a href='https://github.com/stparham'>github.com/stparham</a></p>
        </div>
      </div>

      <footer>
        <p><em>Please bear with me as this site is still in its infancy.</em></p>
      </footer>
    </div>
  );
};
