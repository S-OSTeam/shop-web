import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import { StyledEngineProvider } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { client } from './api/apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StyledEngineProvider injectFirst>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </StyledEngineProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
