import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {StyledPageContainer} from './styled/elements/layouts/page-layout.styled';
import {ThemeProvider} from 'styled-components';
import {theme} from './styled/theme'
import {UserProvider} from './contexts/user.context';
import GlobalStyles from './styled/global/Global';
import App from './App';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <ErrorBoundary>
                <Router>
                    <StyledPageContainer>
                        <UserProvider>
                            <App/>
                        </UserProvider>
                    </StyledPageContainer>
                </Router>
            </ErrorBoundary>
        </ThemeProvider>
    </React.StrictMode>
);