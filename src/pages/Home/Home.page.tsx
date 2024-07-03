import {JSX} from "react/jsx-runtime";
import {Link} from "react-router-dom";

import {ButtonComponent} from "../../components/Button/Button.component.tsx";
import styles from "./Home.module.css";
import {CreateCardModalComponent} from "../../components/NewCard/CreateCardModal.component.tsx";

export function HomePage(): JSX.Element {
  return (
    <div className={styles.home_page_container}>
      <h1 data-testid={"welcome-label"}>Welcome to Snap-Words!</h1>
      <CreateCardModalComponent />
      <Link to="/card-deck-list">
        <ButtonComponent
          dataTestId={"card-deck-list-button"}
          className={"card-deck-list-button"}
        >
          Card-Deck list
        </ButtonComponent>
      </Link>
    </div>
  );
}
