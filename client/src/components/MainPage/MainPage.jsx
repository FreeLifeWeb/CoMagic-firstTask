import React, { useState } from 'react';
import { MyButton } from '../../UI/MyButton/MyButton';
import styles from './MainPage.module.css';

export const MainPage = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [currentText, setCurrentText] = useState(0);
    // массивы с цветами и текстом для изменения при клике, как описано в ТЗ
    const colors = ['#7572d5', '#ff0000', '#00ff00'];
    const texts = ['Click me!', 'Red', 'Green'];

    function changeColorAndText() {
        setCurrentColorIndex((prev) => (prev + 1) % colors.length);
        setCurrentText((prev) => (prev + 1) % texts.length);
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.childConteiner}>
                <MyButton
                    onClick={changeColorAndText}
                    color={colors[currentColorIndex]}
                >
                    {texts[currentText]}
                </MyButton>
            </div>
        </div>
    );
};
