import Styles from "./page.module.scss";
import Image from "next/image";
import companyLogo from "./../../../public/Image/webDevelopment.png";
import companytitle from "./../../../public/Image/Vector.png";
import GoogleImage from "./../../../public/Image/googleLogo.png";
import facebook from "./../../../public/Image/footer/facebook.png";
import Instagram from "./../../../public/Image/footer/instagram.png";
import Twitter from "./../../../public/Image/footer/twitter.png";
import Linkedin from "./../../../public/Image/footer/linkedin.png";

const Footer = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.contentContainer}>
          <div className={Styles.innerContainer}>
            <div>
              <Image src={companytitle} alt="fSfsd" />
              <Image src={companyLogo} alt="fSfsd" />
            </div>
          </div>
          <div>
            <p>Lorem Ipsum is simply dummy text of </p>
            <p>the printing and typesetting industry.</p>
          </div>
          <div>
            <Image src={GoogleImage} alt="" />
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.innerContainer}>
            <div>
              <h4>Links</h4>
            </div>
          </div>
          <div>
            <p>About</p>
            <p>Services</p>
            <p>Case Studies</p>
            <p>How it works</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Areas we serve</p>
          </div>
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.innerContainer}>
            <div>
              <h4>Contact us</h4>
            </div>
          </div>
          <div>
            <p>Lorem Ipsum is simply dummy text </p>
            <p>of the printing and typesetting</p>
            <p>industry.</p>
            <p>+923183561921</p>
          </div>
        </div>
        <div>
        <div className={Styles.listSocialConnection}>
            <div>
              <Image src={facebook} alt="" />
            </div>
            <div>
              <Image src={Instagram} alt="" />
            </div>
            <div>
              <Image src={Twitter} alt="" />
            </div>
            <div>
              <Image src={Linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.bottomContainer}>
        <footer>
          <p>&copy; 2023 Copyright by Agency Solutions. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
