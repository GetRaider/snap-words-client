import {JSX} from "react/jsx-runtime";
import {Link} from "react-router-dom";
import {ButtonComponent} from "../../components/Button/Button.component.tsx";
import styles from "./Home.module.css";

export function HomePage(): JSX.Element {
  return (
    <div className="home-page-container">
      <h1>Welcome to Snap-Words!</h1>
      <input className={styles.input} data-testid={"unknown-input"}></input>
      <Link to="/card-deck-list">
        <ButtonComponent className={"card-deck-list-button"}>
          Card-Deck list
        </ButtonComponent>
      </Link>
    </div>
  );
}
