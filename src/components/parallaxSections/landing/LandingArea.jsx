import React from 'react';
import GlobalStyles from '../../../styles/base/_globalStyles.scss';
import { Parallax } from 'react-scroll-parallax';


const LandingArea = () => {
    return (
        <Parallax className={GlobalStyles.parallaxContainer}>
            <div><text>Aqui van boludeces</text></div>
        </Parallax>
    );
};

export default LandingArea;