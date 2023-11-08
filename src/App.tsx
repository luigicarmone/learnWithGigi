import React from 'react';
import routes from './core/routes/index'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import '@core/index.css'
import {ThemeProvider as NextThemesProvider} from "next-themes";

const router = createBrowserRouter(routes)
function App() {

    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
            <main className="">
                <RouterProvider router={router} />
            </main>
            </NextThemesProvider>
        </NextUIProvider>
    );
}

export default App;