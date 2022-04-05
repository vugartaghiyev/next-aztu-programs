import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Module.module.css";

const Module = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("second_token")) router.push("/module/login");
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Module</h2>
      lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
      quaerat, doloremque, quidem quisquam dolorum, quibusdam, quas
      necessitatibus, quod quae.
    </div>
  );
};

export default Module;
