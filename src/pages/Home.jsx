import "./Home.css";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <h1>BANKBITZ.COM</h1>
      <p>Willkommen auf meiner ersten Website!</p>
      <Link to="/games">
        <button className ="link">🎮 Spiele starten</button>
      </Link>
      <Link to="/OberstSnuggles">
        <button className ="link">Oberstsnuggles</button>
      </Link>
    </main>
  );
}