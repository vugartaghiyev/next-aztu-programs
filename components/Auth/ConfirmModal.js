import React from "react";
import styles from "./ConfirmModal.module.css";
import authStyles from "../../styles/Auth.module.css";
import { useRouter } from "next/router";
import { server } from "../../config";

const ConfirmModal = ({ closeModal, setLoading, email }) => {
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState([]);

  const router = useRouter();

  const confirm = async () => {
    const data = await fetch(`${server}/api/confirm-email`, {
      method: "POST",
      body: JSON.stringify({
        code,
        email,
      }),
    }).then((res) => res.json());
    if (data.status === 200) {
      localStorage.setItem("accessModule", data.token);
      localStorage.setItem("emailModule", data.email);
      setLoading();
      setTimeout(() => {
        router.push("/module");
      }, 2000);
    } else {
      setError(data?.message);
      setCode("");
    }
  };

  React.useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.bg} onClick={closeModal}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>Confirm email</h2>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={authStyles.input}
          type="text"
          placeholder="XXXX"
        />
        <div className={authStyles.error}>{error}</div>
        <button
          type="button"
          className={authStyles.button + " " + styles.button}
          placeholder="XXXX"
          onClick={confirm}
        >
          send
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
