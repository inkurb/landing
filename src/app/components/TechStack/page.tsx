import Styles from "./page.module.scss";
import Image from "next/image";
import Line from "../../../../public/Image/Deco-line.png";
import NodeJs from "../../../../public/Image/services/NodeJS.png";
import PHP from "../../../../public/Image/services/PHP.png";
import MySQl from "../../../../public/Image/services/kisspng-mysqli-php-database-linux-coding-5ac4824a2e87e0 1.png";
import JAVA from "../../../../public/Image/services/Java.png";
import DOTNET from "../../../../public/Image/services/NETCore.png";
import Python from "../../../../public/Image/services/Group.png";
import Rails  from "../../../../public/Image/services/RubyOnRails.png";
import T from "../../../../public/Image/services/Go.png";
import MonGoDB from "../../../../public/Image/services/mon 1.png";
const page = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
          <Image src={Line} alt="" />
          <p>Our</p>
          <h2>Tech Stack</h2>
      </div>
      <div className={Styles.headingContainer}>
        <div>Backend</div>
        <div>Frontend</div>
        <div>Database</div>
        <div>CMS</div>
        <div>CloudTesting</div>
        <div>DevOps</div>
      </div>
      <div className={Styles.imgContainer}>
        <Image src={NodeJs} alt=""/>
        <Image src={PHP} alt=""/>
        <Image src={MySQl} alt=""/>
        <Image src={JAVA} alt=""/>
        <Image src={DOTNET} alt=""/>
      </div>
      <div className={Styles.imgContainer}>
      <Image src={Python} alt=""/>
      <Image src={Rails} alt=""/>
      <Image src={T} alt=""/>
      <Image src={MonGoDB} alt=""/>

      </div>

    </div>
  );
};

export default page;
