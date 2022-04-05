import styles from "../styles/Home.module.css";
import Modules from "../components/Modules";

const Home = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.sectionTitle}>Kafedralar</h3>
      <Modules />
    </div>
  );
};

export default Home;
