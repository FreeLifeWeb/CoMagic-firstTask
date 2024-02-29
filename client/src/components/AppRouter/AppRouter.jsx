import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../../Router/routes';
import { NotFound } from '../NotFound/NotFound';

export const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes?.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                    exact={route.exact}
                />
            ))}
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};
