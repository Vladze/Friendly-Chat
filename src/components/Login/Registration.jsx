import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <form className={styles.root}>
      <div className={styles.form}>
        <h3 className={styles.title}>Create an account</h3>
        <input type="text" className={styles.input} placeholder="Username" />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password repeat"
        />
        <button className={styles.btn}>Submit</button>
      </div>
      <div className={styles.link}>
        Already have an account? <Link to="/login">Sign In</Link>
      </div>
    </form>
  );
};

export default Registration;
