import {ICardDeck} from "../components/CardDeck/CardDeck.types.ts";

export const defaultCardDecks: ICardDeck[] = [
  {
    id: "1",
    title: "Random cards",
    cards: [
      {
        id: 1,
        source: "How",
        translation: "Как",
      },
      {
        id: 2,
        source: "Yes",
        translation: "Да",
      },
      {
        id: 3,
        source: "No",
        translation: "Нет",
      },
    ],
  },
  {
    id: "2",
    title: "A0-Verbs",
    cards: [
      {
        id: 4,
        source: "Do",
        translation: "Делать",
      },
      {
        id: 5,
        source: "Play",
        translation: "Играть",
      },
      {
        id: 6,
        source: "Walk",
        translation: "Гулять",
      },
    ],
  },
];
