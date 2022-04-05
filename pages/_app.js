import Layout from "../components/Layout";
import "../styles/global.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("first_token")) router.push("/login");
  }, [router.pathname]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
