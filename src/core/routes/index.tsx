import React from 'react';

import ErrorPage from '../components/ErrorPage';
import Home from '@presentation/container/Home';
import LayoutMain from "@presentation/components/Layout/LayoutMain";

const routes = [
    {
        path: '',
        element: <LayoutMain />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home />,
                title: 'Home',
            },
        ],
    },
];

export default routes;
