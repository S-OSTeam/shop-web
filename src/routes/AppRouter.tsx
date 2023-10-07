import React from 'react';
import {Route,Routes} from 'react-router-dom';
// import { FaqForm } from '../components/molecules/FAQ/FaqForm';
import { FaqPage } from '../pages/FAQ/FaqPage';


export const AppRouter = () => {
    return(
        <Routes>
           <Route path={"/"} element={<FaqPage/>} />
        </Routes>
    )
}
