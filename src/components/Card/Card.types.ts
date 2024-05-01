import {jsx} from "@emotion/react";
import IntrinsicAttributes = jsx.JSX.IntrinsicAttributes;

export interface ICardProps extends IntrinsicAttributes {
  card: ICard;
}

export interface ICard {
  id: number;
  source: string;
  translation: string;
}
