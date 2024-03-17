import posthog from 'posthog-js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import './index.css';

try {
  posthog.init(import.meta.env.VITE_POSTHOG_TOKEN, { api_host: 'https://eu.posthog.com', respect_dnt: true,  })
} catch (error) {
  console.error('Failed to initialize PostHog', error);
}

console.debug('import.meta.env', import.meta.env);

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No root element found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
