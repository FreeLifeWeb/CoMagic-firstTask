import { isValidEmail } from './validateEmail';

export const submitHandler = (
    e,
    input,
    setEmailError,
    setPasswordError,
    setModal,
    setInput
) => {
    e.preventDefault();
    // проверка валидности email
    if (!isValidEmail(input.email)) {
        setEmailError('Неверный формат электронной почты');
        return;
    } else {
        setEmailError('');
    }

    // проверка длины пароля
    if (input.password.length < 3) {
        setPasswordError('Пароль должен содержать не менее 3 символов');
        return;
    } else {
        setPasswordError('');
    }

    // если email и пароль валидны, отображаем модальное окно
    if (isValidEmail(input.email) && input.password.length >= 3) {
        setModal(true);
        setInput({ email: '', password: '' });
    }
};
