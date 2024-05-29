import Styles from "./page.module.scss";
import Image from "next/image";
import Line from "./../../../public/Image/decoline.png";
const DevelopmentAlkine = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <span>
          <Image src={Line} alt="" />
        </span>
        <span>
          <p>How development </p>
        </span>
        <span>
          <h2>through Alcaline works</h2>
        </span>
      </div>
      <div className={Styles.upperContainer}>
        <div className={Styles.boxContainer}>
          <div>
            <div>
              <span className={Styles.innerHeading}> #1</span>
              <span className={Styles.innerMainHeading}>
                Assemble the right team
              </span>
            </div>
            <div>
              <p>
                We handle all aspects of vetting and choosing the right team
                that you dont have the time, expertise, or desire to do.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.boxContainer}>
          <div>
            <div>
              <span className={Styles.innerHeading}> #3</span>
              <span className={Styles.innerMainHeading}>Tech architecture</span>
            </div>
            <div>
              <p>
                We break monolithic apps into microservices. Decoupling the code
                allows teams to move faster and more independently
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.boxContainer}>
          <div>
            <div>
              <span className={Styles.innerHeading}> #5</span>
              <span className={Styles.innerMainHeading}>Code reviews</span>
            </div>
            <div>
              <p>
                Code reviews before release help detect issues like memory
                leaks, file leaks, performance signs, and general bad smells
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className={Styles.upperContainer}>
        <div className={Styles.boxContainer}>
          <div>
            <div>
              <span className={Styles.innerHeading}> #2</span>
              <span className={Styles.innerMainHeading}>Sprint planning</span>
            </div>
            <div>
              <p>
                Sprint roadmap is a collective planning effort. Team members
                collaborate to clarify items and ensure shared understanding.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.boxContainer}>
          <div>
            <div>
              <span className={Styles.innerHeading}> #4</span>
              <span className={Styles.innerMainHeading}>
                Standups & weekly demos
              </span>
            </div>
            <div>
              <p>
                Standups, weekly demos, and weekly reviews make sure everyone is
                on the same page and can raise their concerns.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.boxContainer}>
          <div>
            <div>
              <span className={Styles.innerHeading}> #6</span>
              <span className={Styles.innerMainHeading}>
                Iterative delivery
              </span>
            </div>
            <div>
              <p>
                We divide the implementation process into several checkpoints
                rather than a single deadline.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DevelopmentAlkine;
