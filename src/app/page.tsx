import styles from "./page.module.css";
import ContentContainer from "./components/contentContainer/page";
import Information from "./components/Information/page";
import Swiper from "./components/Swiper/sliding";
import AuthoriseCompanies from "./components/AuthoriseCompanies/page";
export default function Home() {
  return (
    <main className={styles.main}>
     <ContentContainer/>
     <Swiper/>
     <Information/>
     <AuthoriseCompanies/>
    </main>
  );
}
