import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './Navbar.module.css';

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <nav className={styles['navbar']}>
      <Link to='/' className={styles['brand']}>{data.site.siteMetadata.title}</Link>
      {/* <Link to='/about/' activeClassName={styles['activeLink']} className={styles['link']}>About</Link>
      <Link to='/contact/' activeClassName={styles['activeLink']} className={styles['link']}>Contact{styles['link']}</Link> */}
    </nav>
  );
};
