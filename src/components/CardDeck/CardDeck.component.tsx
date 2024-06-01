import {CardComponent} from "../Card/Card.component.tsx";
import {ICardDeckProps} from "./CardDeck.types.ts";
import {CreateCardModalComponent} from "../NewCard/CreateCardModal.component.tsx";

const CardDeckComponent = (props: ICardDeckProps) => {
  const {deck} = props;
  console.log({deck});

  return (
    <div className={"card-deck-container"}>
      <CreateCardModalComponent />
      <div className={"card-decks"}>
        {deck.cards.map(card => (
          <CardComponent card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default CardDeckComponent;
