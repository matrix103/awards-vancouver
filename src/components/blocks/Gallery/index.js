import React from 'react';
import styles from "./Gallery.module.scss"

const Gallery = () => {
    return (

        <div className={styles.wrapper}>

                <div className={styles.title}>
                    Award Gallery
                </div>
                <div className={styles.description}>
                    Enjoy one of the best film and short film festivals taking place in Cannes. Indie short film brings you a unique and exciting event where you will enjoy the best selection of short films worldwide in its different categories
                </div>
            <div className={styles.photoWrapper}>
                <img src={"/images/slider/0.jpg"}  className={`${styles.photo} ${styles.photo0}`}/>
                <img src={"/images/slider/1.jpg"}  className={`${styles.photo} ${styles.photo1}`}/>
                <img src={"/images/slider/2.jpg"}  className={`${styles.photo} ${styles.photo2}`}/>
                <img src={"/images/slider/0.jpg"}  className={`${styles.photo} ${styles.photo3}`}/>
                <img src={"/images/slider/1.jpg"}  className={`${styles.photo} ${styles.photo4}`}/>
                <img src={"/images/slider/2.jpg"}  className={`${styles.photo} ${styles.photo5}`}/>
            </div>
        </div>
    );
};

export default Gallery;