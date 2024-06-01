import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {HeaderComponent} from "./components/Header/Header.component.tsx";
import {HomePage} from "./pages/Home/Home.page.tsx";
import {CardDeckListPage} from "./pages/CardDeckList/CardDeckList.page.tsx";
import {CardDeckViewComponent} from "./components/CardDeckView/CardDeckView.component.tsx";

function App() {
  return (
    <>
      <div className={"App"}>
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/card-deck-list" element={<CardDeckListPage />} />
            <Route path="/decks/:deckId" element={<CardDeckViewComponent />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
