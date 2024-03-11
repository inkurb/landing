import styles from "./page.module.css";
import ContentContainer from "./components/contentContainer/page";
import Information from "./components/Information/page";
import Swiper from "./components/Swiper/sliding";
import AuthoriseCompanies from "./components/AuthoriseCompanies/page";
import FeedBacks from "./components/FeedBack/page";
import Recents from "./components/Recents/page";
import WayOfBuilding from './components/wayofBuilding/page';
import OurApproach from './components/Approach/page';


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
    </main>
  );
}
