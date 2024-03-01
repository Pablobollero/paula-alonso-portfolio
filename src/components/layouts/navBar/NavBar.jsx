import React from 'react'
import Anchor from '../anchor/Anchor';
import style from './_navBar.module.scss';

const NavBar = () => {
    return (
        <div className={style.navBarContainer}>
            <div className={style.aContainer}>
            <Anchor className={style.a} link='#' name='About me' />
            <Anchor className={style.a} link='#' name='My work' />
            <Anchor className={style.a} link='#' name='Contact' />
            </div>
        </div>
    );
};

export default NavBar;