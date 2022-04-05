import styles from "../../styles/Auth.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import emailjs from "emailjs-com";
import ConfirmModal from "../../components/Auth/ConfirmModal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emailModal, setEmailModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessModule")) {
      router.push("/module");
    }
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
      setError([]);
      loginUser();
    } else {
      setError([...error, "Məlumatları düzgün daxil edin"]);
    }
  };

  const loginUser = async () => {
    const data = await fetch(`http://localhost:3000/api/login-module`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
    if (data.status === 200) {
      setEmailModal(true);
      confirmEmail(data.confirmCode);
    } else {
      setError([...error, data.message]);
    }
  };

  const confirmEmail = async (confirmCode) => {
    emailjs.send(
      "service_3t60x3i",
      "template_g839uk9",
      {
        to_name: email.split("@")[0],
        send_to: email,
        code: confirmCode,
      },
      "RexvGjk9i6gKzifc7"
    );
  };

  useEffect(() => {
    if (error.length > 0) {
      setTimeout(() => {
        setError([]);
      }, 3000);
    }
  }, [error]);

  return (
    <div className={styles.auth}>
      <h1 className={styles.title}>Daxil ol(Modul)</h1>
      <form className={styles.form} onSubmit={(e) => handlerSubmit(e)}>
        <input
          className={styles.input}
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="İstifadəçi mail"
        />
        <input
          className={styles.input}
          type="password"
          value={password}
          placeholder="Şifrə"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.length > 0 &&
          error.map((item, i) => (
            <p key={i} className={styles.error}>
              {item}
            </p>
          ))}

        <button className={styles.button}>Daxil ol</button>
      </form>
      {loading && <Loading />}
      {emailModal && (
        <ConfirmModal
          closeModal={() => setEmailModal(false)}
          setLoading={() => setLoading(true)}
          email={email}
        />
      )}
    </div>
  );
};

export default Login;

const Loading = () => {
  return (
    <div className={styles.loading}>
      <span></span>
    </div>
  );
};
