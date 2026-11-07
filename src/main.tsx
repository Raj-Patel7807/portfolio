import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/tokens.css';
import '@/styles/global.css';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import App from '@/app/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Failed to find root element');
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
