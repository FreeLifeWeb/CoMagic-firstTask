import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { AppRouter } from './components/AppRouter/AppRouter';

export function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <AppRouter />
            </BrowserRouter>
        </>
    );
}
