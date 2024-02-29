import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarList}>
                <Link to='/'>Button</Link>
                <Link to='/form'>Form</Link>
                <Link to='/button-of-year'>Button of Year</Link>
            </div>
        </div>
    );
};

export default NavBar;
