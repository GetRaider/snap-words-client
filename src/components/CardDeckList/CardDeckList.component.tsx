import {useNavigate} from "react-router-dom";

import styles from "./CardDeckList.module.css";
import {ICardDeckListProps} from "./CardDeckList.types.ts";
import {ButtonComponent} from "../Button/Button.component.tsx";

const CardDeckListComponent = (props: ICardDeckListProps) => {
  const {decks} = props;

  const navigate = useNavigate();

  const handleDeckClick = (deckId: string | number): void => {
    navigate(`/decks/${deckId}`);
  };

  return (
    <div className={styles.deckContainer}>
      {decks.map(deck => (
        <ButtonComponent
          dataTestId={`${deck.title}_card-deck-button`}
          className={styles.deck_button}
          key={deck.id}
          onClick={() => handleDeckClick(deck.id)}
        >
          {deck.title}
        </ButtonComponent>
      ))}
    </div>
  );
};

export default CardDeckListComponent;
