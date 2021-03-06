import styles from "../styles/Home.module.css";
import Modules from "../components/Modules";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "../components/Slider";
const Home = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("first_token")) router.push("/login");
    else setIsLoading(false);
  }, [router.pathname]);

  if (isLoading) return "Loading...";
  else
    return (
      <div className={styles.container}>
        <div className={styles.head}>
          <Slider />
        </div>
        <h3 className={styles.sectionTitle}>Fakültələr</h3>
        <Modules />
      </div>
    );
};

export default Home;
