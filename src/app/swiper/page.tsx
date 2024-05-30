"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import WebDevImage from "../../../public/Image/Dashboard_perspective_matte.png";
import MobileDevImage from "./../../../public/Image/Mobile_app_perspective_matte.png";
import CodeDevImage from "./../../../public/Image/Code_perspective_matte.png";
import styles from "./sliding.module.scss";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/bundle";

const Sliding = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2>Services we offer</h2>
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={5}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop
          className="swiper-container"
        >
          <SwiperSlide className={styles.containerSlide}>
            <Image src={WebDevImage} alt="img" />
            <h1>Mobile App Development</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium officiis provident vitae, doloribus eaque saepe
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.containerSlide}>
            <Image src={MobileDevImage} alt="img" />
            <h1>Software Testing Services</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium officiis provident vitae, doloribus eaque saepe
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.containerSlide}>
            <Image src={CodeDevImage} alt="img" />

            <h1>Web Design & Development</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium officiis provident vitae, doloribus eaque saepe
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.containerSlide}>
            <Image src={WebDevImage} alt="img" />
            <h1>Mobile App Development</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium officiis provident vitae, doloribus eaque saepe
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.containerSlide}>
            <Image src={MobileDevImage} alt="img" />
            <h1>Software Testing Services</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium officiis provident vitae, doloribus eaque saepe
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.containerSlide}>
            <Image src={CodeDevImage} alt="img" />

            <h1>Web Design & Development</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium officiis provident vitae, doloribus eaque saepe
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Sliding;

