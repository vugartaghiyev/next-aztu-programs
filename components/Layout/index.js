import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("first_token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [router.pathname]);

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        {isLoggedIn && (
          <div className={styles.head}>
            <div className={styles.headCover}></div>
            <div className={styles.headBg}>
              <Image
                src="/images/main-bg.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.searchBox}>
              <input type="text" placeholder="Sizə necə kömək edə bilərik?" />
              <button>Axtar</button>
            </div>
          </div>
        )}

        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
