import styles from "./NotFoundBlock.module.scss";
import { useNavigate, Link } from "react-router-dom";

const NotFoundBlock = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <img
        className={styles.img}
        height={150}
        width={150}
        src="img/icon_sad.png"
        alt="sad"
      />
      <h4 className={styles.title}>Page not found</h4>
      <button onClick={() => navigate(-1)} className={styles.btn}>
        Go back
      </button>
    </div>
  );
};

export default NotFoundBlock;
