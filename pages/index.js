import styles from "../styles/Home.module.css";
import Modules from "../components/Modules";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
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
          <div className={styles.headCover}></div>
          <div className={styles.headBg}>
            <Image src="/images/main-bg.jpg" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Sizə necə kömək edə bilərik?" />
            <button>Axtar</button>
          </div>
        </div>
        <h3 className={styles.sectionTitle}>Fakültələr</h3>
        <Modules />
      </div>
    );
};

export default Home;
