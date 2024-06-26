import Styles from "./page.module.scss";
import Image from "next/image";
import Line from "./../../../public/Image/decoline.png";
import Mobile1 from "./../../../public/Image/mobileDevelopment.png";
import Mobile2 from "./../../../public/Image/musicApp.png";
import Mobile3 from "./../../../public/Image/healthApp.png";
import SeeMore from "./../../../public/Image/seemore.png";

const Reacent= () => {
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
      <div className={Styles.contentContainer}>
        <div className={Styles.innerContentContainer} style={{backgroundColor:'#F1F2FF'}}>
          <div>
            <Image src={Mobile3} alt=""  className={Styles.imageContainer}/>
          </div>
          <div className={Styles.detailsContainer}>
            <div>
              <h3>Website Design for SCFC Canada</h3>
            </div>
            <div>
              <p>
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
            </div>
            <div className={Styles.caseStudyContainer}>
              <span>See More</span>
              <span>
                <Image src={SeeMore} alt="" />
              </span>
            </div>          </div>
        </div>
      </div>
      <div className={Styles.contentContainer}>
        <div className={Styles.innerContentContainer} style={{backgroundColor:' #F0FFF7'}}>
          <div>
            <Image src={Mobile1} alt=""  className={Styles.imageContainer}/>
          </div>
          <div className={Styles.detailsContainer}>
            <div>
              <h3>Website Design for SCFC Canada</h3>
            </div>
            <div>
              <p>
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
            </div>
            <div className={Styles.caseStudyContainer}>
              <span>See More</span>
              <span>
                <Image src={SeeMore} alt="" />
              </span>
            </div>          </div>
        </div>
      </div>
      <div className={Styles.contentContainer}>
        <div className={Styles.innerContentContainer} style={{backgroundColor:'  #FFF4F4'}}>
          <div>
            <Image src={Mobile2} alt="" className={Styles.imageContainer}/>
          </div>
          <div className={Styles.detailsContainer}>
            <div>
              <h3>Website Design for SCFC Canada</h3>
            </div>
            <div>
              <p>
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
            </div>
            <div className={Styles.caseStudyContainer}>
              <span>See More</span>
              <span>
                <Image src={SeeMore} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.caseStudyContainer}>
        <span>Read cases studies</span>
        <span>
          <Image src={SeeMore} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Reacent;
