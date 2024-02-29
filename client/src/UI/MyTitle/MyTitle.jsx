import React from 'react';
import styles from './MyTitle.module.css';

export const MyTitle = ({ children, ...props }) => {
    return (
        <h1 {...props} className={styles.signUpTitle}>
            {children}
        </h1>
    );
};
