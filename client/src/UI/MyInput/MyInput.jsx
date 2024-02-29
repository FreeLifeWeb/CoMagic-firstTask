import React from 'react';
import styles from './MyInput.module.css';

export const MyInput = (props) => {
    return (
        <div>
            <input className={styles.input} {...props} />
        </div>
    );
};
