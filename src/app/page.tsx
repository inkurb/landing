import styles from "./page.module.css";
import ContentContainer from "./contentContainer/page";
import Information from "./information/page";
import Swiper from "./swiper/page";
import AuthoriseCompanies from "./authoriseCompanies/page";
import FeedBacks from "./feedBack/page";
import Recents from "./recents/page";
import WayOfBuilding from './wayofBuilding/page';
import OurApproach from './approach/page';
import TechStack from './techStack/page';
import DevelopmentAlkine from './developmentAlkine/page';
import Featured from './featured/page';
import Footer from './Footer/page'


export default function Home() {
  return (
    <main className={styles.main}>
     <ContentContainer/>
     <Swiper/>
     <Information/>
     <AuthoriseCompanies/>
     <FeedBacks/>
     <Recents/>
     <WayOfBuilding/>
     <OurApproach/>
     <TechStack/>
     <DevelopmentAlkine/>
     <Featured/>
     <Footer/>
    </main>
  );
}
