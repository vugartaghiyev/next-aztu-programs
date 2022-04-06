import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Module.module.css";

const Module = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("second_token")) router.push("/module/login");
    else setIsLoading(false);
  }, [router.pathname]);

  if (isLoading) {
    return "Loading...";
  } else
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Module</h2>
        <p className={styles.text}>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
          quaerat, doloremque, quidem quisquam dolorum, quibusdam, quas
          necessitatibus, quod quae. lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam quos quaerat, doloremque, quidem quisquam
          dolorum, quibusdam, quas necessitatibus, quod quae. lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam quos quaerat,
          doloremque, quidem quisquam dolorum, quibusdam, quas necessitatibus,
          quod quae. lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam quos quaerat, doloremque, quidem quisquam dolorum, quibusdam,
          quas necessitatibus, quod quae. lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam quos quaerat, doloremque, quidem quisquam
          dolorum, quibusdam, quas necessitatibus, quod quae. lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam quos quaerat,
          doloremque, quidem quisquam dolorum, quibusdam, quas necessitatibus,
          quod quae. lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam quos quaerat, doloremque, quidem quisquam dolorum, quibusdam,
          quas necessitatibus, quod quae.
        </p>
      </div>
    );
};

export default Module;
