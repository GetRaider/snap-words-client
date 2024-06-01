import {ICard} from "../Card/Card.types.ts";

export interface ICardDeckProps {
  deck: ICardDeck;
}

export interface ICardDeck {
  id: string;
  title: string;
  cards: ICard[];
}
