import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Header = () => {
  const [deadTime, setDeadTime] = useState(null);
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("email");
    localStorage.removeItem("accessModule");
    localStorage.removeItem("emailModule");
    router.push("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("accessModule")) {
      deadTime && deadTime < 1 && logout();
    }
  }, [router.pathname]);

  const calcDeadTime = () => {
    if (localStorage.getItem("accessModule")) {
      var decoded = jwt_decode(localStorage.getItem("accessModule"));
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
    if (localStorage.getItem("accessModule")) {
      deadTime && deadTime < 1 && logout();
    }
  }, [deadTime]);

  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>LOGOAZ</a>
      </Link>
      {/* <button className={styles.logout} onClick={() => logout()}>
        logout
      </button> */}
      <div className={styles.headerRight}>
        {deadTime && (
          <div className={styles.deadTime}>
            {Math.floor(Math.floor(deadTime) / 60) +
              ":" +
              Math.floor(Math.floor(deadTime) % 60)}
          </div>
        )}
        <div className={styles.logout} onClick={logout}>
          logout
        </div>
      </div>
    </div>
  );
};

export default Header;
