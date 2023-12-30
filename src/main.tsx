import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Tolgee, TolgeeProvider, FormatSimple } from "@tolgee/react";
import {useLanguage} from "@infrastructure/utils/global";
import EastereggConsole from "@core/components/EastereggConsole";

EastereggConsole();

const tolgee = Tolgee()
    .use(FormatSimple())
    // .use(DevTools())
    // .use(FormatIcu())
    .init({
        // eslint-disable-next-line react-hooks/rules-of-hooks
        language: useLanguage(),

        apiUrl: import.meta.env.TOLGEE_API_URL,
        apiKey: import.meta.env.TOLGEE_API_KEY,

        staticData: {
            en: () => import('./i18n/en.json'),
            it: () => import('./i18n/it.json'),
            es: () => import('./i18n/es.json'),
            fr: () => import('./i18n/fr.json'),
        },
    });

tolgee.run();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <TolgeeProvider
        tolgee={tolgee}
        fallback="Loading..."
    >
        <App />
    </TolgeeProvider>
);
