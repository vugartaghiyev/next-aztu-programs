import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Header = () => {
  const [deadTime, setDeadTime] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("first_token");
    localStorage.removeItem("email");
    localStorage.removeItem("second_token");
    localStorage.removeItem("emailModule");
    router.push("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("second_token")) {
      deadTime && deadTime < 1 && logout();
    }
  }, [router.pathname]);

  const calcDeadTime = () => {
    if (localStorage.getItem("second_token")) {
      var decoded = jwt_decode(localStorage.getItem("second_token"));
      return decoded.iat - Date.now() / 1000;
    }
    return null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDeadTime(calcDeadTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("second_token")) {
      deadTime && deadTime < 1 && logout();
    }
  }, [deadTime]);

  useEffect(() => {
    if (localStorage.getItem("first_token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [router.pathname]);

  const rightSide = styles.headerRight;
  if (isSearch) rightSide += " " + styles.flexOne;
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link href="/">
          <a className={styles.logo}>
            <img src="/images/aztu-logo.png" alt="logo" />
            <p className={styles.logoText}>
              AZTU <br /> <span>programs</span>
            </p>
          </a>
        </Link>
        {deadTime && (
          <div className={styles.deadTime}>
            {Math.floor(Math.floor(deadTime) / 60) +
              ":" +
              Math.floor(Math.floor(deadTime) % 60)}
          </div>
        )}
      </div>
      {isLoggedIn && (
        <div className={rightSide}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Sizə necə kömək edə bilərik?" />
          </div>
          <div
            className={styles.searchButton}
            onClick={() => setIsSearch((prev) => !prev)}
          >
            <img src="https://img.icons8.com/ios-filled/25/000000/search--v1.png" />
          </div>

          <div className={styles.logout} onClick={logout}>
            <img src="https://img.icons8.com/external-sbts2018-mixed-sbts2018/20/ffffff/external-logout-social-media-basic-1-sbts2018-mixed-sbts2018.png" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
