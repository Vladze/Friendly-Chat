import styles from "./AsideSearch.module.scss";

const AsideSearch = () => {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src="/img/search.svg" alt="search" />
      <input className={styles.input} placeholder="Search" />
    </div>
  );
};

export default AsideSearch;
