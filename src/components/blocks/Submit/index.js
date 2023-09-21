import React from 'react';
import styles from "./Submit.module.scss"

const Submit = () => {
    return (

        <div className={styles.wrapper}>
            <div className={styles.inner}>
                    <div className={styles.title}>
                        We are aiming to watch your project!
                    </div>
                    <div className={styles.button}>
                        <img src={"/images/FFButtons/gold.png"}/>
                    </div>
            </div>
        </div>
    );
};

export default Submit;