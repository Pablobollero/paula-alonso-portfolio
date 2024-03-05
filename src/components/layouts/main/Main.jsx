import React from 'react'
import styles from './_main.module.scss';
import Subtitle from '../subtitle/Subtitle';
import LandingArea from '../../parallaxSections/landing/LandingArea';
import AboutMe from '../../parallaxSections/aboutMe/AboutMe';
import MyWork from '../../parallaxSections/myWork/MyWork';
import GetInTouch from '../../parallaxSections/contact/GetInTouch';


const Main = () => {
    return (
        <div className={styles.container}>
            <LandingArea />
            <Subtitle subtitle='About me'/>
            <AboutMe />
            <Subtitle subtitle='My work'/>
            <MyWork />
            <Subtitle subtitle='Get in touch'/>
            <GetInTouch />
        </div>
    );
};

export default Main;