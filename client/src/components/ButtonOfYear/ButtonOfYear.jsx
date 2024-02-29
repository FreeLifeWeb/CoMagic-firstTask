import React, { useState, useEffect } from 'react';
import { MyButton } from '../../UI/MyButton/MyButton';
import styles from './ButtonOfYear.module.css';
import { MyModal } from '../../UI/MyModal/MyModal';

export const ButtonOfYear = () => {
    const [modal, setModal] = useState(false);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // Так как у меня отсутствовали побочные эффекты при монтировании
    // компонента (запрос на бэк), я сделал это для демонстрации применения
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
        setModal(true);
    }, []);

    const handleRefreshYear = () => {
        setCurrentYear(new Date().getFullYear());
    };

    return (
        <div className={styles.mainContent}>
            <div className={styles.childContent}>
                <MyButton onClick={() => setModal(true)}>
                    Current Year?
                </MyButton>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <p>
                    <strong>{currentYear}</strong>
                </p>
                <div className={styles.modalContent}>
                    <MyButton onClick={handleRefreshYear}>
                        Refresh Year!
                    </MyButton>
                </div>
            </MyModal>
        </div>
    );
};
