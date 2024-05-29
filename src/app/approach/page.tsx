import Styles from "./page.module.scss";
import Image from "next/image";
import Line from "./../../../public/Image/decoline.png";
import UXIcon1 from "./../../../public/Image/Rocket_perspective_matte.png";
import UXIcon2 from "./../../../public/Image/Code_perspectivematte.png";
import UXIcon3 from "./../../../public/Image/Heart_rate_perspective_matte.png";
import UXIcon4 from "./../../../public/Image/Shield_perspective_matte.png";
import UXIcon5 from "./../../../public/Image/Success_perspective_matte.png";
import UXIcon6 from "./../../../public/Image/Padlock_perspective_matte.png";

const Approach= () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <span>
          <Image src={Line} alt="" />
        </span>
        <span>
          <p>Our design and</p>
        </span>
        <span>
          <h2>development approach</h2>
        </span>
      </div>
      <div className={Styles.parentContainer}>
        <div className={Styles.contentContainer}>
          <div
            className={Styles.imgContainer}
            style={{
              background: "linear-gradient(225deg, #29272E 0%, #27272E 100%)",
            }}
          >
            <Image src={UXIcon1} alt="" />
          </div>
          <div>
            <div>
              <h3>UX Driven Engineering</h3>
            </div>
            <div>
              <p>
                Unlike other companies, we are a UX first development company.
                Projects are driven by designers and they make sure design and
                experiences translate to code.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div
            className={Styles.imgContainer}
            style={{
              background:
                " linear-gradient(225deg, #68DBF2 0.01%, #509CF5 100%)",
            }}
          >
            <Image src={UXIcon2} alt="" />
          </div>
          <div>
            <div>
              <h3>Developing Shared Understanding</h3>
            </div>
            <div>
              <p>
                Unlike other companies, we are a UX first development company.
                Projects are driven by designers and they make sure design and
                experiences translate to code.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div
            className={Styles.imgContainer}
            style={{
              background:
                "linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)",
            }}
          >
            <Image src={UXIcon3} alt="" />
          </div>
          <div>
            <div>
              <h3>Proven Experience and Expertise</h3>
            </div>
            <div>
              <p>
                Unlike other companies, we are a UX first development company.
                Projects are driven by designers and they make sure design and
                experiences translate to code.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div
            className={Styles.imgContainer}
            style={{
              background: "linear-gradient(225deg, #67E9F1 0%, #24E795 100%)",
            }}
          >
            <Image src={UXIcon4} alt="" />
          </div>
          <div>
            <div>
              <h3>Security & Intellectual Property (IP)</h3>
            </div>
            <div>
              <p>
                Unlike other companies, we are a UX first development company.
                Projects are driven by designers and they make sure design and
                experiences translate to code.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div
            className={Styles.imgContainer}
            style={{
              background: "linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)",
            }}
          >
            <Image src={UXIcon5} alt="" />
          </div>
          <div>
            <div>
              <h3>Code Reviews</h3>
            </div>
            <div>
              <p>
                Unlike other companies, we are a UX first development company.
                Projects are driven by designers and they make sure design and
                experiences translate to code.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div
            className={Styles.imgContainer}
            style={{
              background: " linear-gradient(225deg, #F76680 0%, #57007B 100%)",
            }}
          >
            <Image src={UXIcon6} alt="" />
          </div>
          <div>
            <div>
              <h3>Quality Assurance & Testing</h3>
            </div>
            <div>
              <p>
                Unlike other companies, we are a UX first development company.
                Projects are driven by designers and they make sure design and
                experiences translate to code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
