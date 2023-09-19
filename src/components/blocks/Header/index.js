import React from 'react';
import styles from "./Header.module.scss"

const Index = () => {
    return (

        <div className={styles.headerWrapper}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <img src={"/images/logo.png"}/>
                    <div className={styles.logoName}>
                        Best Director & Filmmaker Awards
                    </div>
                </div>
                <div className={styles.headerItems}>
                    <div className={styles.headerItem}>Awards</div>
                    <div className={styles.headerItem}>Categories</div>
                    <div className={styles.headerItem}>Rules and Terms</div>
                    <div className={styles.headerItem}>Submit Now</div>
                </div>
            </div>



        </div>
    );
};

export default Index;