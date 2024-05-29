import Styles from "./page.module.scss";
import Image from "next/image";
import Line from "./../../../public/Image/decoline.png";
const FeedBack= () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.innerContainer}>
        <span>
          <Image src={Line} alt="" />
        </span>
        <span>
          <p>Our Recents</p>
        </span>
        <span>
          <h2>Case studies</h2>
        </span>
      </div>
      <div>
        <p>
          Without any doubt I recommend Alcaline Solutions as one of the best
          web design and digital marketing agencies. One of the best agencies
          I’ve came across so far. Wouldn’t be hesitated to introduce their work
          to someone else.
        </p>
      </div>
    </div>
  );
};

export default FeedBack;
