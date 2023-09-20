import React from 'react';
import styles from "./Overview.module.scss"
import {Button} from "antd";
import {Autoplay, Scrollbar, EffectCoverflow} from "swiper/modules";
import {Swiper , SwiperSlide} from "swiper/react";

import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/effect-coverflow"





const Overview = () => {
    return (

        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.title}>
                        Our Mission
                    </div>
                    <div className={styles.description}>
                        Is to acknowledge outstanding talent and unwavering dedication in the realms of film directing, performance, and filmmaking within the independent cinema landscape. From a year's worth of exceptional entries, only the most exceptional films will earn a coveted spot in the annual screening event in Vancouver.
                    </div>
                    <div className={styles.button}>
                        <img src={"/images/FFButtons/gold.png"}/>
                    </div>
                </div>
                <div className={styles.slider}>
                    <Swiper
                        navigation
                        modules={[Autoplay, Scrollbar, EffectCoverflow]}
                        pagination={{ clickable: true }}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false
                        }}
                        slidesPerView={3}
                        centeredSlides
                    >
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/0.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/1.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/2.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/2.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/2.jpg"}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Overview;