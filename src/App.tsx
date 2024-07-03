import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {HeaderComponent} from "./components/Header/Header.component";
import {HomePage} from "./pages/Home/Home.page";
import {CardDeckListPage} from "./pages/CardDeckList/CardDeckList.page";
import {CardDeckViewComponent} from "./components/CardDeckView/CardDeckView.component";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <HeaderComponent />
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/card-deck-list" element={<CardDeckListPage />} />
            <Route path="/decks/:deckId" element={<CardDeckViewComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
