import {useState} from "react";

import {CardComponent, ICard} from "../Card/Card.component.tsx";

const CardDeckComponent = (props: ICardDeckProps) => {
  const {deck} = props;
  const {title, cards} = deck;

  const [showCards, setShowCards] = useState(false);

  const toggleShowCards = () => {
    setShowCards(!showCards); // Toggle the value of showCards
  };

  return (
    <div>
      <h2>Card Deck with title: {title}</h2>
      <button onClick={() => toggleShowCards()}>Show cards</button>
      {showCards &&
        cards.map(card => <CardComponent card={card} key={card.id} />)}
    </div>
  );
};

export default CardDeckComponent;

interface ICardDeckProps {
  deck: ICardDeck;
}

export interface ICardDeck {
  title: string;
  cards: ICard[];
}
