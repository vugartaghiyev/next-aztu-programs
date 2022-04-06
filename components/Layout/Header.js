import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Header = () => {
  const [deadTime, setDeadTime] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>AZTU PROGRAMS</a>
      </Link>
      <div className={styles.headerRight}>
        {deadTime && (
          <div className={styles.deadTime}>
            {Math.floor(Math.floor(deadTime) / 60) +
              ":" +
              Math.floor(Math.floor(deadTime) % 60)}
          </div>
        )}
        {isLoggedIn && (
          <div className={styles.logout} onClick={logout}>
            logout
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
