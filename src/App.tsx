import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/organisms/LoginPage';
import SignUpPage from './pages/Signup';
import FindPage from './pages/FindIdPw';

const App: React.FC = () => {
    const handleLoginSubmit = (username: string, password: string) => {
        console.log(`Submitted: Username - ${username}, Password - ${password}`);
    };

    return (
        <Routes>
            <Route path="/findidpw" element={<FindPage />}/>
            <Route path="/signup" element={<SignUpPage />}/>
            <Route path="/login" element={<Login onSubmit={handleLoginSubmit}/>}/>
        </Routes>

    );
};

export default App;
