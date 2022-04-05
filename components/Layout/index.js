import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        {typeof window !== "undefined" &&
        localStorage.getItem("first_token") ? (
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
        ) : (
          ""
        )}

        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
