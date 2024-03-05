import styles from "./page.module.css";
import ContentContainer from "./components/contentContainer/page";
import Services from "./components/services/page";
export default function Home() {
  return (
    <main className={styles.main}>
     <ContentContainer/>
     <Services/>
    </main>
  );
}
