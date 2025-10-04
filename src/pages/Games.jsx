import "./Games.css"

import { Link } from "react-router-dom";

export default function Games() {
  return (
    <main className="games">
      <h1>🎮 Game Page </h1>
      <p>Hier kommt bald mehr Unc!</p>
      <Link to="/">
      <button>⬅️ Zurück zur Startseite</button>
      </Link>
    </main>
  );
}