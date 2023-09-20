import React from 'react';
import styles from "./Banner.module.scss"

const Banner = () => {
    return (

        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        Best Director & Filmmaker Vancouver Awards
                    </div>
                    <div className={styles.subTitle}>
                        International competition held every four months, culminating in an annual screening event that celebrates the world's finest film directors, actors, and filmmakers.
                    </div>
                    <div className={styles.button}>
                        <img src={"/images/FFButtons/gold.png"}/>
                    </div>
                </div>
                <div className={styles.logo}>
                    <img src={"/images/logo.png"}/>
                </div>
            </div>
        </div>
    );
};

export default Banner;