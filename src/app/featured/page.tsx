import Styles from "./page.module.scss";
import Image from "next/image";
import Line from "./../../../public/Image/decoline.png";
import Arow from "./../../../public/Image/arrow-right-line.png";
import Featured1 from "./../../../public/Image/Featured/hacking.png";
import Featured2 from "./../../../public/Image/Featured/computing.png";
import Featured3 from "./../../../public/Image/Featured/learning.png";
import Featured4 from "./../../../public/Image/Featured/development.png";
import Upperdesigne from "./../../../public/Image/untitled folder/upper.png";
import lowerdesigne from "./../../../public/Image/untitled folder/lower.png";

const Featured = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <span>
          <Image src={Line} alt="" />
        </span>
        <span>
          <p>Featured</p>
        </span>
        <span>
          <h2>Resources</h2>
        </span>
      </div>
      <div className={Styles.mainContainer}>
        <div className={Styles.contentContainer}>
          <div>
            <Image src={Featured1} alt="" />
          </div>
          <div>
            How to Build a Scalable Application up to 1 Million Users on AWS
          </div>
          <div className={Styles.readmore}>
            <span>Readmore</span>
            <span>
              <Image src={Arow} alt="" />
            </span>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div>
            <Image src={Featured2} alt="" />
          </div>
          <div>
            How to Build a Scalable Application up to 1 Million Users on AWS
          </div>
          <div className={Styles.readmore}>
            <span>Readmore</span>
            <span>
              <Image src={Arow} alt="" />
            </span>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div>
            <Image src={Featured3} alt="" />
          </div>
          <div>
            How to Build a Scalable Application up to 1 Million Users on AWS
          </div>
          <div className={Styles.readmore}>
            <span>Readmore</span>
            <span>
              <Image src={Arow} alt="" />
            </span>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div>
            <Image src={Featured4} alt="" />
          </div>
          <div>
            How to Build a Scalable Application up to 1 Million Users on AWS
          </div>
          <div className={Styles.readmore}>
            <span>Readmore</span>
            <span>
              <Image src={Arow} alt="" />
            </span>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div>
            <Image src={Featured1} alt="" />
          </div>
          <div>
            How to Build a Scalable Application up to 1 Million Users on AWS
          </div>
          <div className={Styles.readmore}>
            <span>Readmore</span>
            <span>
              <Image src={Arow} alt="" />
            </span>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div>
            <Image src={Featured2} alt="" />
          </div>
          <div>
            How to Build a Scalable Application up to 1 Million Users on AWS
          </div>
          <div className={Styles.readmore}>
            <span>Readmore</span>
            <span>
              <Image src={Arow} alt="" />
            </span>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div>
            <Image src={Featured3} alt="" />
          </div>
          <div>
            How to Build a Scalable Application up to 1 Million Users on AWS
          </div>
          <div className={Styles.readmore}>
            <span>Readmore</span>
            <span>
              <Image src={Arow} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className={Styles.hiringdeveloper}>
        <div>
          <h3>Hire the best developers and</h3>
          <h3>designers around!</h3>
        </div>
        <div className={Styles.rightContainer}>
          <div><Image src={Upperdesigne} alt=""/></div>
          <div className={Styles.orangeContainer}>
            <p>Hire Top Developers</p>
          </div>
          <div><Image src={lowerdesigne} alt=""/></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
