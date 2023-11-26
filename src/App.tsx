import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/organisms/LoginPage';
import SignUpPage from './pages/Signup';
import FindPage from './pages/FindIdPw';
import MainPage from './pages/Main';

const App: React.FC = () => {
    const handleLoginSubmit = (username: string, password: string) => {
        console.log(`Submitted: Username - ${username}, Password - ${password}`);

    };
    const accessToken=localStorage.getItem("accessToken");
    return (
            <Routes>
                <Route
                    path="/main"
                    element={accessToken ? < MainPage/> : <Navigate to="/login" replace/>}
                />
                <Route path="/findidpw" element={<FindPage />}/>
                <Route path="/signup" element={<SignUpPage />}/>
                <Route path="/login" element={accessToken ? <Navigate to="/main" replace/>:<Login onSubmit={handleLoginSubmit}/>}/>
            </Routes>
    );
};

export default App;
