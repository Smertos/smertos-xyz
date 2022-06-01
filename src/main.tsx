import { App } from 'app/components/app';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { setupGlobalStyles } from './global.styles';

setupGlobalStyles();

const containerRoot = document.querySelector('#app-root');

if (!containerRoot) {
    throw new Error('Render root wasn\'t created before app initialization');
}

const root = createRoot(containerRoot);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
