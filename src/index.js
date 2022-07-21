import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import {theme} from './styled/theme'
import GlobalStyles from './styled/global/Global';
import App from './App';
import {StoreApi} from './services/store-api';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = new StoreApi();
console.log(store.getCategories());
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        </ThemeProvider>
    </React.StrictMode>
);