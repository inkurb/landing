import Image from "next/image";
import styles from "./page.module.scss";
import ContentImage from "../../../../public/Image/web-development 1.png";
export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.leftContainerheading}>
          <div  className={styles.heading}>Great<span> Product </span>is</div>
          <div className={styles.headingBold}>buit by Great <span>Teams</span> </div>
        </div>
        <div>
          <p>
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
        </div>
        <div><button>Lets get started</button></div>
      </div>
      <div className={styles.rightContainer}>
        <Image src={ContentImage} alt="logo" />
      </div>
    </div>
  );
}
