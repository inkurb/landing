import styles from './page.module.scss'
import Image from 'next/image';
import companyLogo from '../../../../public/Image/Ik developers.png';
import companytitle from '../../../../public/Image/Vector.png';

export default function page() {
  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div><Image src={companytitle} alt='companyTitle' className={styles.logoImage}/></div>
            <div><Image src={companyLogo} alt='companyLogo' className={styles.logoImage}/></div>
        </div>
        <div className={styles.informationheading}>
            <span>About Us</span>
            <span>Services</span>
            <span>Case Studies</span>
            <span>Blog</span>
            <span>How it works</span>
            <span>Hire</span>
        </div>
        <div ><button>Contact Us</button></div>
    </div>
  )
}
