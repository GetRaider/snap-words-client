import React from "react";
import {useParams} from "react-router-dom";
import CardDeckComponent from "../CardDeck/CardDeck.component.tsx";
import {defaultCardDecks} from "../../constants/data.constants.ts";

export const CardDeckViewComponent: React.FC = () => {
  const {deckId} = useParams<{deckId: string}>();
  const foundDeck = defaultCardDecks.find(deck => deck.id === deckId);

  return (
    <div>
      <div className="cardDeckView" />
      <h1>{foundDeck.title} deck</h1>
      <CardDeckComponent deck={foundDeck}></CardDeckComponent>
    </div>
  );
};
