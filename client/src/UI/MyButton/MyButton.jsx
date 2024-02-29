import React from 'react';
import styles from './Button.module.css';

export function MyButton({ children, ...props }) {
    return (
        <button
            {...props}
            className={styles.myButton}
            style={{ '--button-color': props.color }}
        >
            {children}
        </button>
    );
}
