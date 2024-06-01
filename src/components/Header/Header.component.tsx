import {Link} from "react-router-dom";

import styles from "./Header.module.css";
import {ButtonComponent} from "../Button/Button.component.tsx";
import {ButtonType} from "../Button/Button.types.ts";

export function HeaderComponent() {
  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.buttons_container}>
        <Link to="/home">
          <ButtonComponent
            variant={ButtonType.contained}
            className={"home_page_button"}
            dataTestId={"home-button"}
          >
            Home
          </ButtonComponent>
        </Link>
      </div>
    </header>
  );
}
