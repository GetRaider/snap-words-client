import {ICardDeckListProps} from "./CardDeckList.types.ts";
import CardDeckComponent from "../CardDeck/CardDeck.component.tsx";

const CardDeckListComponent = (props: ICardDeckListProps) => {
  const {decks} = props;

  return (
    <div>
      <h1>Card Deck List: </h1>
      {decks.map(deck => (
        <CardDeckComponent deck={deck} />
      ))}
    </div>
  );
};

export default CardDeckListComponent;
