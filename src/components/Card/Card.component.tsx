import {useState} from "react";
import ReactCardFlip from "react-card-flip";
import {JSX} from "react/jsx-runtime";

import styles from "./Card.module.css";
import {ICardProps} from "./Card.types.ts";

export const CardComponent = (props: ICardProps): JSX.Element => {
  const {card} = props;
  const {source, translation} = card;
  const [isFlipped, setFlip] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>
      <button className={styles.front} onClick={() => setFlip(!isFlipped)}>
        {source}
      </button>
      <button className={styles.back} onClick={() => setFlip(!isFlipped)}>
        {translation}
      </button>
    </ReactCardFlip>
  );
};
