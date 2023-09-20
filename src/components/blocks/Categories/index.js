import React from 'react';
import styles from "./Categories.module.scss"

const Categories = () => {
    return (
        <div className={styles.body}>
            <div className={styles.body}>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <div className={styles.tittle}>
                            Categories
                        </div>
                        <div className={styles.blocks}>
                            <div className={styles.block_one}>
                                Best Composer Award<br></br>
                                Best Actor Award<br></br>
                                Best Supporting Actor Award<br></br>
                                Best Actress Award<br></br>
                                Best Supporting Actress Award<br></br>
                                Best Cinematographer (Director of Photography) Award<br></br>
                                Best Film Editor Award<br></br>
                                Best Production Designer Award<br></br>
                                Best Costume Designer Award<br></br>
                                Best Makeup and Hairstyling Award<br></br>
                                Best Visual Effects Artist Award<br></br>
                                Best Sound Designer Award<br></br>
                                Best Screenwriter Award<br></br>
                                Best Documentary Filmmaker Award<br></br>
                                Best Animation Artist Award<br></br>
                                Best Original Song Award<br></br>
                                Best Stunt Coordinator Award<br></br>
                            </div>
                            <div className={styles.block_two}>
                                Best Director of a Comedy <br></br>
                                Best Director of a Drama <br></br>
                                Best Director of a Documentary <br></br>
                                Best Director of an Animation <br></br>
                                Best Director of a Music Video <br></br>
                                Best Director of a Thriller <br></br>
                                Best Director of a Horror<br></br>
                                Best Director of a Romance Best Director of a Fantasy<br></br>
                                Best Director of a Sci-Fi Best Director of an Experimental Film<br></br>
                                Best Director of a Biographical Film<br></br>
                                Best Director of a Social Justice Film<br></br>
                                Best Student Director<br></br>
                                Best 1st-time Director of a Feature<br></br>
                                Best 1st-time Director of a Short<br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;