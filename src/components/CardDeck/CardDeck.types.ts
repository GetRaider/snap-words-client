import {ICard} from "../Card/Card.types.ts";

export interface ICardDeckProps {
  deck: ICardDeck;
}

export interface ICardDeck {
  title: string;
  cards: ICard[];
}
