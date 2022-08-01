import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './styles/global-styles';
import {theme} from './styles/theme'
import {UserProvider} from './contexts/user.context';
import {ErrorBoundary} from './containers/error-boundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Router>
                <UserProvider>
                    <ErrorBoundary>
                        <App/>
                    </ErrorBoundary>
                </UserProvider>
            </Router>
        </ThemeProvider>
    </React.StrictMode>
);