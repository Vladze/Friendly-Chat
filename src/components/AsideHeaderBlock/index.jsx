import AsideSearch from "../AsideSearch";
import styles from "./AsideHeaderBlock.module.scss";

const AsideHeaderBlock = () => {
  return (
    <div className={styles.root}>
      <div className={styles.button}>
        <img src="/img/burger.svg" alt="menu" />
      </div>
      <AsideSearch />
    </div>
  );
};

export default AsideHeaderBlock;
