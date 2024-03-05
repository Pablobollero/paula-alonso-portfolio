import React from 'react'
import style from './_bodyContainer.module.scss';
import Header from '../../layouts/header/Header';
import Main from '../../layouts/main/Main';
import Footer from '../../layouts/footer/Footer';

const BodyContainer = () => {
    return (
        <div className={style.container}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default BodyContainer;