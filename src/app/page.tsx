'use client'
import React from "react";
import styles from "./page.module.css";
import ContentContainer from "./contentContainer/page";
import Information from "./information/page";
import Swiper from "./swiper/page";
import AuthoriseCompanies from "./authoriseCompanies/page";
import FeedBacks from "./feedBack/page";
import Recents from "./recents/page";
import WayOfBuilding from './wayofBuilding/page';
import OurApproach from './approach/page';
import TechStack from './techStack/page';
import DevelopmentAlkine from './developmentAlkine/page';
import Featured from './featured/page';
import Footer from './Footer/page';
import { Link } from "react-scroll";

export default function Home() {
  return (
    <main className={styles.main}>
      <section id="contentContainer">
        <ContentContainer />
      </section>
      <section id="swiper">
        <Swiper />
      </section>
      <section id="information">
        <Information />
      </section>
      <section id="authoriseCompanies">
        <AuthoriseCompanies />
      </section>
      {/* <section id="feedBacks">
        <FeedBacks />
      </section> */}
      <section id="recents">
        <Recents />
      </section>
      <section id="wayOfBuilding">
        <WayOfBuilding />
      </section>
      <section id="ourApproach">
        <OurApproach />
      </section>
      <section id="techStack">
        <TechStack />
      </section>
      <section id="developmentAlkine">
        <DevelopmentAlkine />
      </section>
      <section id="featured">
        <Featured />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
