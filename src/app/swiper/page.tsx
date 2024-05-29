"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WebDevImage from '../../../public/Image/Dashboard_perspective_matte.png';
import MobileDevImage from './../../../public/Image/Mobile_app_perspective_matte.png';
import CodeDevImage from './../../../public/Image/Code_perspective_matte.png';
import styles from "./sliding.module.scss";
import { Pagination } from "swiper/modules";
import Image from 'next/image';
import "swiper/css/pagination";
import "swiper/css/bundle";
const Sliding = () => {
  return (
    <div className={styles.container}>
        <div className={styles.headingContainer}>
            <h2>Services  we offer</h2>
            </div>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
       
      >
        <SwiperSlide className={styles.containerSlide}>
            <Image src={WebDevImage} alt="img"/>
          <h1>Mobile App Development</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            officiis provident vitae, doloribus eaque saepe
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.containerSlide}>
        <Image src={MobileDevImage} alt="img"/>
          <h1>Software Testing Services</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            officiis provident vitae, doloribus eaque saepe
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.containerSlide}>
        <Image src={CodeDevImage} alt="img"/>

          <h1>Web Design & Development</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            officiis provident vitae, doloribus eaque saepe
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.containerSlide}>
            <Image src={WebDevImage} alt="img"/>
          <h1>Mobile App Development</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            officiis provident vitae, doloribus eaque saepe
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.containerSlide}>
        <Image src={MobileDevImage} alt="img"/>
          <h1>Software Testing Services</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            officiis provident vitae, doloribus eaque saepe
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.containerSlide}>
        <Image src={CodeDevImage} alt="img"/>

          <h1>Web Design & Development</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            officiis provident vitae, doloribus eaque saepe
          </p>
        </SwiperSlide>
      </Swiper>
        </div>

    </div>
  );
};

export default Sliding;
