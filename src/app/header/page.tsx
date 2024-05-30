'use client'
import styles from './page.module.scss';
import Image from 'next/image';
import companyLogo from './../../../public/Image/companyName.png';
import companyTitle from './../../../public/Image/Vector.png';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div><Image src={companyTitle} alt='companyTitle' className={styles.logoImage}/></div>
        <div><Image src={companyLogo} alt='companyLogo' className={styles.logoImage}/></div>
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
