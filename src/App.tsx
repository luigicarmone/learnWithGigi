import React from 'react';
import routes from './core/routes/index'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import '@core/index.css'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@core/config";

const router = createBrowserRouter(routes)
function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="dark">
                        <main className="h-screen">
                        <RouterProvider router={router} />
                        </main>
                </NextThemesProvider>
            </NextUIProvider>
        </QueryClientProvider>
    );
}

export default App;