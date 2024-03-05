import React from 'react';
import NavBar from '../navBar/NavBar';
import styles from './_header.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <NavBar/>
        </div>
    );
};

export default Header;