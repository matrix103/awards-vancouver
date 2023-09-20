import React from 'react';
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.body}>
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.rows}>
                    <div className={styles.logo}>
                        <img src="/images/Footer/logo.png" alt='' />
                    </div>
                    <div className={styles.row}>
                    Contact Us
                        <a href="mailto:example@gmail.ru">example@gmail.ru</a>
                    </div>
                    <div className={styles.row}>
                        <a href='#'>About Us</a>
                        <a href='#'>Categories</a>
                        <a href='#'>Awards</a>
                    </div>
                    <div className={styles.row}>
                        <a href='#'>Rules</a>
                        <a href='#'>Screenings</a>
                        <a href='#'>Interviews</a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                Copyright © 2023 Vancouver Awards
            </div>
        </div>
        </div>
    );
};

export default Footer;