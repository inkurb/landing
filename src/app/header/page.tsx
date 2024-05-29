import styles from './page.module.scss';
import Image from 'next/image';
import companyLogo from './../../../public/Image/companyName.png';
import companyTitle from './../../../public/Image/Vector.png';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div><Image src={companyTitle} alt='companyTitle' className={styles.logoImage}/></div>
        <div><Image src={companyLogo} alt='companyLogo' className={styles.logoImage}/></div>
      </div>
      <div className={styles.informationheading}>
        <Link href="/services">About Us</Link>
        <Link href="">Services</Link>
        <Link href="">Case Studies</Link>
        <button>Contact Us</button>
      </div>
    </div>
  )
}
