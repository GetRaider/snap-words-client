import "../App.css";
import {useState} from "react";
import {defaultCardDecks} from "./constants/data.constants.ts";
import CardDeckListComponent from "./components/CardDeckList/CardDeckList.component.tsx";
import {HeaderComponent} from "./components/Header/Header.component.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Home/Home.page.tsx";

function App() {
  const [decks] = useState(defaultCardDecks);

  return (
    <>
      <div className={"App"}>
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/card-deck-list"
              element={<CardDeckListComponent decks={decks} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
