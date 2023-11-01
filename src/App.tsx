import React from 'react';
import routes from './core/routes/index'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import '@core/index.css'
const router = createBrowserRouter(routes)
function App() {

    return (
        <NextUIProvider>
            <main className="purple-dark text-foreground bg-background">
                <RouterProvider router={router} />
            </main>
        </NextUIProvider>
    );
}

export default App;