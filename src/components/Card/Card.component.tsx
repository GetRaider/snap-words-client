import {JSX} from "react/jsx-runtime";
import IntrinsicAttributes = JSX.IntrinsicAttributes;

import styles from "./Card.module.css";

export function CardComponent(props: ICardProps): JSX.Element {
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
}

interface ICardProps extends IntrinsicAttributes {
  card: ICard;
}

export interface ICard {
  id: number;
  source: string;
  translation: string;
}
