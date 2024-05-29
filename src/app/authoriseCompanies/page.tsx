import Styles from "./page.module.scss";
import Image from "next/image";
import AuthoriseCom1 from "./../../../public/Image/Logo-6.png";
import AuthoriseCom2 from "./../../../public/Image/Logo-7.png";
import AuthoriseCom3 from "./../../../public/Image/Logo-9.png";
import AuthoriseCom4 from "./../../../public/Image/logo3.png";
import AuthoriseCom5 from "./../../../public/Image/logo5.png";
import AuthoriseCom6 from "./../../../public/Image/logo8.png";
import AuthoriseCom7 from "./../../../public/Image/logo9.png";

const AuthoriseCompanies = () => {
  return (
    <div className={Styles.container}>
      <div>
        <Image src={AuthoriseCom1} alt="comp1" />
      </div>
      <div>
        <Image src={AuthoriseCom2} alt="comp1" />
      </div>
      <div>
        <Image src={AuthoriseCom3} alt="comp1" />
      </div>
      <div>
        <Image src={AuthoriseCom4} alt="comp1" />
      </div>
      <div>
        <Image src={AuthoriseCom5} alt="comp1" />
      </div>
      <div>
        <Image src={AuthoriseCom6} alt="comp1" />
      </div>
      <div>
        <Image src={AuthoriseCom7} alt="comp1" />
      </div>
    </div>
  );
};

export default AuthoriseCompanies;
