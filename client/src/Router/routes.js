import { ButtonOfYear } from '../components/ButtonOfYear/ButtonOfYear';
import { Form } from '../components/Form/Form';
import { MainPage } from '../components/MainPage/MainPage';

export const publicRoutes = [
    { path: '/', element: MainPage, exact: true },
    { path: '/form', element: Form, exact: true },
    { path: '/button-of-year', element: ButtonOfYear, exact: true },
];
