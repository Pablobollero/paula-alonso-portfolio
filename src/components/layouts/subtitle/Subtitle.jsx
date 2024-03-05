import React from 'react'
import styles from './_subtitle.module.scss';

const Subtitle = ({subtitle}) => {
    return (
        <div className={styles.container}><h2 className={styles.subtitle}>{subtitle}</h2></div>
    );
};

export default Subtitle;