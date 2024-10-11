import React from 'react';
import { mainDivClassName } from './MainPageStyles';
import InteriorDesign from '../InteriorDesign/InteriorDesign';

const MainPage: React.FC = () => {
    return (
        <div className={mainDivClassName}>
            <h1>Make your interior design idea come to life!</h1>
            <InteriorDesign></InteriorDesign>
        </div>
    );
};

export default MainPage;