import React from 'react'
import style from './_bodyContainer.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';

const BodyContainer = () => {
    return (
        <div className={style.Container}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default BodyContainer;