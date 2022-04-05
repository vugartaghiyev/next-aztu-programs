import styles from "../styles/Auth.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { server } from "../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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
    const data = await fetch(`${server}/api/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
    if (data.status === 200) {
      localStorage.setItem("first_token", data.first_token);
      localStorage.setItem("email", data.email);
      setLoading(true);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      setError([...error, data.message]);
    }
  };

  useEffect(() => {
    if (error.length > 0) {
      setTimeout(() => {
        setError([]);
      }, 3000);
    }
  }, [error]);

  return (
    <div className={styles.auth} style={{ paddingTop: "15%" }}>
      <h1 className={styles.title}>Daxil ol</h1>
      <form className={styles.form} onSubmit={(e) => handlerSubmit(e)}>
        <input
          className={styles.input}
          value={email}
          placeholder="İstifadəçi mail"
          onChange={(e) => setEmail(e.target.value)}
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
