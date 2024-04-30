import styles from "./Header.module.css";
import {Link} from "react-router-dom";

export function HeaderComponent() {
  return (
    <header>
      <div className={styles.logo_container}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
      </div>
      <Link to="/home">
        <button className={"home-page-button"}>Home</button>
      </Link>
    </header>
  );
}
