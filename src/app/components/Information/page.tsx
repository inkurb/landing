import Styles from "./page.module.scss";
import Image from "next/image";
import InformationImage from "../../../../public/Image/Abou-us-Video.png";
import ArrowImage from "../../../../public/Image/arrow-right-line.png";
import ArrowBottom from "../../../../public/Image/Frame 22.png";
import DecoLine from "../../../../public/Image/Deco-line.png";

const page = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <div>
          <div className={Styles.innerContent}>
          <Image src={DecoLine} alt=""/>

            <div className={Styles.innerHeading}>

              <span>Leading companies trust us</span>
            </div>
            <div className={Styles.innerHeading}>
              <span className={Styles.innerHeadingContent}>
                to develop software
              </span>
            </div>
            <div>
              <p>
                We <span id={Styles.highlightedheading}>add development capacity </span>to tech teams. Our value isn’t
                limited to building teams but is equally distributed across the
                project lifecycle. We are a custom software development company
                that guarantees the successful delivery of your project.
              </p>
            </div>
            <div className={Styles.moreInformation}>
              <div>
                <p> See more Informations</p>
              </div>
              <div>
                <Image src={ArrowImage} alt="logoArrow" />
              </div>
            </div>
          </div>
        </div>
        <div>  
          <Image src={InformationImage} alt="img"  className={Styles.informtionImgContainer}/>
        </div>
      </div>
      <div className={Styles.bottomContainer}>
        <div>
        <Image src={DecoLine} alt="logoArrow" />

        <div className={Styles.innerHeading}>Meet the People</div>
        <div className={Styles.innerHeadingContent}>We are Working With</div>
        </div>
       <div>
        <div>
          <Image src={ArrowBottom} alt=""/>
        </div> 
       </div>
      </div>
    </div>
  );
};

export default page;
