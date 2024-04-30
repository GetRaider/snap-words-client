import {JSX} from "react/jsx-runtime";
import {Link} from "react-router-dom";

export function HomePage(): JSX.Element {
  return (
    <div className="home-page-container">
      <h1>Welcome to Snap-Words!</h1>
      <Link to="/card-deck-list">
        <button>Card-Deck list</button>
      </Link>
    </div>
  );
}
