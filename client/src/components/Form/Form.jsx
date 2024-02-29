import React, { useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import styles from './Form.module.css';
import { MyTitle } from '../../UI/MyTitle/MyTitle';
import { MyInput } from '../../UI/MyInput/MyInput';
import { MyButton } from '../../UI/MyButton/MyButton';
import { MyModal } from '../../UI/MyModal/MyModal';
import { submitHandler } from '../../utils/fetchData';

export function Form() {
    //фокус на первом инпуте при первой отрисовке
    useEffect(() => {
        const focus = document.getElementById('first-input');
        if (focus) {
            focus.focus();
        }
    }, []);

    const [input, setInput] = React.useState({ email: '', password: '' });
    // console.log(input);
    // состояние для чекбокса принятия условий при регистрации
    const [checked, setChecked] = React.useState(true);
    const [modal, setModal] = React.useState(false);
    // состояние для валидации
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');

    // функция на изменения состояния чекбокса
    function checkHandler() {
        setChecked((prev) => !prev);
    }
    const changeHandler = (e) =>
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    function submitFunction(e) {
        submitHandler(
            e,
            input,
            setEmailError,
            setPasswordError,
            setModal,
            setInput
        );
    }

    return (
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <div className={styles.signUpBlock}>
                    <MyTitle>Sign in</MyTitle>
                    <form onSubmit={(e) => submitFunction(e)}>
                        {modal && (
                            <MyModal visible={modal} setVisible={setModal}>
                                <p>This time you guessed the password!</p>
                            </MyModal>
                        )}
                        <div className={styles.inputContainer}>
                            <label htmlFor='first-input'>
                                <FaEnvelope className={styles.icon} />
                                <MyInput
                                    onChange={(e) => changeHandler(e)}
                                    name='email'
                                    value={input.email}
                                    id='first-input'
                                    type='text'
                                    placeholder='Your email...'
                                />
                                {emailError && (
                                    <span className={styles.errorText}>
                                        {emailError}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor='password'>
                                <FaLock className={styles.icon} />
                                <MyInput
                                    onChange={(e) => changeHandler(e)}
                                    name='password'
                                    value={input.password}
                                    type='password'
                                    placeholder='Your password...'
                                />
                                {passwordError && (
                                    <span className={styles.errorText}>
                                        {passwordError}
                                    </span>
                                )}
                            </label>
                        </div>
                        <input
                            id='check'
                            onClick={checkHandler}
                            type='checkbox'
                            defaultChecked={checked}
                        />
                        <span className={styles.signUpAgree}>
                            I agree all statements in{' '}
                            <a href='/'>Terms of service</a>
                        </span>
                        <div>
                            <MyButton type='submit'>Register</MyButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
