import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const url = "http://chat.local/api/user/auth/sign-in";
  const data = { password: "qwerty", username: "vlad" };

  fetch(url, {
    method: "POST",
    cache: "no-cache",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((res) => res.json)
    .then((res) => console.log(res));

  return (
    <form className={styles.root}>
      <div className={styles.form}>
        <h3 className={styles.title}>Sign In</h3>
        <input type="text" className={styles.input} placeholder="Username" />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
        />
        <button className={styles.btn}>Submit</button>
      </div>
      <div className={styles.link}>
        Don't have an account? <Link to="/registration">Create</Link>
      </div>
    </form>
  );
};

export default Login;
