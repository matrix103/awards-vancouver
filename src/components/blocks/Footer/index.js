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
                    <div className={styles.row_one}>
                    Contact Us <br></br>
                    <a href="mailto:example@gmail.ru">example@gmail.ru</a>
                    </div>
                    <div className={styles.row_two}>
                    <a href='#'>About Us</a> <br></br>
                    <a href='#'>Categories</a><br></br>
                    <a href='#'>Awards</a><br></br>
                    </div>
                    <div className={styles.row_three}>
                    <a href='#'>Rules</a><br></br>
                    <a href='#'>Screenings</a><br></br>
                    <a href='#'>Interviews</a><br></br>
                    </div>
                    <div className={styles.submit}>
                    <a href='https://filmfreeway.com/'><img src='/images/submit.png' alt=''/></a>
                </div>
                </div>
            </div>
            <hr></hr>
            <div className={styles.copyright}>
                Copyright © 2023 Vancouver Awards
            </div>
        </div>
        </div>
    );
};

export default Footer;