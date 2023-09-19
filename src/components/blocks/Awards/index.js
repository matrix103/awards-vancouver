import React from 'react';
import styles from "./Awards.module.scss"

const Awards = () => {
    return (
    <div className={styles.body}>
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.tittle}>
                    Awards
                    <div className={styles.cup}>
                        <img src={"/images/Awards/cup.png"}/>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.description_one}>
                        During the four-monthly competition, our expert jury will conduct private screenings to identify and honor the best film directors and filmmakers. We will present the prestigious 'Visionary Director Award' and the 'Innovative Filmmaker Award' as the highest accolades. Additionally, we will recognize outstanding contributions with 'The Rising Star Award'. Honorable Mentions will also be bestowed upon those directors and filmmakers whose remarkable skills deserve celebration. 
                    </div>
                    <div className={styles.description_two}>
                        Furthermore, we will present the coveted 'Masterpiece in Directing' and 'Excellence in Filmmaking' awards to exceptional talents. All winners of the four-monthly competition will receive a Winner Laurel, an official certificate in digital format, ready for printing, and will be prominently featured on our official website.
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Awards;