import {JSX} from "react/jsx-runtime";

import styles from "./Card.module.css";
import {ICardProps} from "./Card.types.ts";

export const CardComponent = (props: ICardProps): JSX.Element => {
  const {card} = props;
  const {id, source, translation} = card;

  return (
    <div className={styles.card}>
      <div className={styles.card_overlay} />
      <div className={styles.card_inner}>
        {id}. {source} - {translation}
      </div>
    </div>
  );
};
