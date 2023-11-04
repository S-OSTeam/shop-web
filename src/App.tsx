import React from 'react';
import Login from './components/organisms/LoginPage';
import Header from './components/commons/Header';

const App: React.FC = () => {
    const handleLoginSubmit = (username: string, password: string) => {
        console.log(`Submitted: Username - ${username}, Password - ${password}`);
    };

    return (
        <div>
            <Header />
            <Login onSubmit={handleLoginSubmit} />

        </div>
    );
};

export default App;
