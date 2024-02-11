import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { StyledEngineProvider } from '@mui/material';
import { client } from '@api/apollo/client';
import { CookiesProvider } from 'react-cookie';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StyledEngineProvider injectFirst>
        <ApolloProvider client={client}>
            <CookiesProvider>
                <BrowserRouter>
                    <RecoilRoot>
                        <App />
                    </RecoilRoot>
                </BrowserRouter>
            </CookiesProvider>
        </ApolloProvider>
    </StyledEngineProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
