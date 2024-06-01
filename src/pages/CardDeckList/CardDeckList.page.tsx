import {JSX} from "react/jsx-runtime";
import CardDeckListComponent from "../../components/CardDeckList/CardDeckList.component.tsx";
import {useState} from "react";
import {defaultCardDecks} from "../../constants/data.constants.ts";

export function CardDeckListPage(): JSX.Element {
  const [decks] = useState(defaultCardDecks);

  return (
    <div className="card-deck-list-page-container">
      <h1>Card-Deck lists:</h1>
      <CardDeckListComponent decks={decks} />
    </div>
  );
}
