import Styles from "./page.module.scss";
import Image from "next/image";
import Line from "../../../../public/Image/Deco-line.png";
import Team1 from "../../../../public/Image/Rectangle 17.png";
import Profile1 from "../../../../public/Image/Ellipse 185.png";
import Team2 from "../../../../public/Image/Rectangle 18.png";
import Team3 from "../../../../public/Image/Rectangle 19.png";



const page = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <span>
          <Image src={Line} alt="" />
        </span>
        <span>
          <p>Way Of Building</p>
        </span>
        <span>
          <h2>Great Software</h2>
        </span>
      </div>
      <div className={Styles.contentContainer}>
        <div className={Styles.innerContentContainer}>
          <div className={Styles.detailsContainer}>
            <div>
              <h3>Build the right team to scale</h3>
            </div>
            <div>
              <p>
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </p>
              <p>
                Our delivery model helps you cut costs and deliver within
                budget.
              </p>
              <blockquote>
                <p>
                  &quot;Simform is quick to identify larger problems with the
                  software, so we decided to expand our scope to build new
                  modules.&quot;
                </p>
              </blockquote>
              <div className={Styles.profileContainer}>
                <div>
                    <Image src={Profile1} alt=""/>
                </div>
                <div className={Styles.innerProfileConent} >
                  <div>Jeewa markram</div>
                  <div className={Styles.postInCompany}>CEO</div>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.imgContainer}>
            <Image src={Team1} alt="" />
          </div>
        </div>
      </div>
      <div className={Styles.contentContainer}>
        <div className={Styles.innerContentContainer}>
        <div>
            <Image src={Team2} alt="" />
          </div>
          <div className={Styles.detailsContainer}>
            <div>
              <h3>Build the right team to scale</h3>
            </div>
            <div>
              <p>
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </p>
              <p>
                Our delivery model helps you cut costs and deliver within
                budget.
              </p>
              <blockquote>
                <p>
                  &quot;Simform is quick to identify larger problems with the
                  software, so we decided to expand our scope to build new
                  modules.&quot;
                </p>
              </blockquote>
              <div className={Styles.profileContainer}>
                <div>
                    <Image src={Profile1} alt=""/>
                </div>
                <div className={Styles.innerProfileConent} >
                  <div>Jeewa markram</div>
                  <div className={Styles.postInCompany}>CEO</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className={Styles.contentContainer}>
        <div className={Styles.innerContentContainer}>
          <div className={Styles.detailsContainer}>
            <div>
              <h3>Build the right team to scale</h3>
            </div>
            <div>
              <p>
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </p>
              <p>
                Our delivery model helps you cut costs and deliver within
                budget.
              </p>
              <blockquote>
                <p>
                  &quot;Simform is quick to identify larger problems with the
                  software, so we decided to expand our scope to build new
                  modules.&quot;
                </p>
              </blockquote>
              <div className={Styles.profileContainer}>
                <div>
                    <Image src={Profile1} alt=""/>
                </div>
                <div className={Styles.innerProfileConent} >
                  <div>Jeewa markram</div>
                  <div className={Styles.postInCompany}>CEO</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src={Team3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
