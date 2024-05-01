import {useState} from "react";

import {CardComponent} from "../Card/Card.component.tsx";
import {ICardDeckProps} from "./CardDeck.types.ts";

const CardDeckComponent = (props: ICardDeckProps) => {
  const {deck} = props;
  const {title, cards} = deck;

  const [showCards, setShowCards] = useState(false);

  const toggleShowCards = () => {
    setShowCards(!showCards); // Toggle the value of showCards
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => toggleShowCards()}>Show cards</button>
      {showCards &&
        cards.map(card => <CardComponent card={card} key={card.id} />)}
    </div>
  );
};

export default CardDeckComponent;
