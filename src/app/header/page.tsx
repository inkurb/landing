'use client'
import styles from './page.module.scss';
import Image from 'next/image';
import InkrubLogo from './../../../public/Image/inkrubLogo.svg';
import companyTitle from './../../../public/Image/Vector.png';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div><Image src={InkrubLogo} alt='companyLogo' className={styles.logoImage}/></div>
      </div>
      <div className={styles.informationheading}>
        <ScrollLink to="contentContainer" smooth={true} duration={500}>
          About Us
        </ScrollLink>
        <ScrollLink to="swiper" smooth={true} duration={500}>
          Services
        </ScrollLink>
        <ScrollLink to="authoriseCompanies" smooth={true} duration={500}>
          Case Studies
        </ScrollLink>
        <button>Contact Us</button>
      </div>
    </div>
  )
}
