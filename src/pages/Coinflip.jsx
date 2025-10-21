import { useState} from "react";
import "./Coinflip.css";
import { Link } from "react-router-dom";
import kopf from "../assets/coinflip/kopf.png";
import zahl from "../assets/coinflip/zahl.png";
import coinsound from "../assets/coinflip/coinsound.mp3"

export default function Coinflip(){

    const [result, setResult] = useState(null);
    const [flipping, setFlipping] = useState(false);
    const [bet, setBet] = useState(null);
    const [streak, setStreak] = useState(0);
    

    function flipcoin(){ 

        if(!bet){
            alert("Bitte erst wetten alda")
            return;
        }

        setFlipping(true);
        const sound = new Audio(coinsound);
        sound.play();

        setTimeout(()=>{
            const random = Math.random() < 0.5 ? "Kopf" : "Zahl";
            setResult(random);
            if(random === bet){
                  setStreak( streak +1);
            }
            else{setStreak(0)};

            setFlipping(false)
        }, 1500);
    }



    return(
        <main className="coinflip">
            <h1> Münzwurf 🪙 </h1>

            <p>Dein Tip : {""}
                {bet ? <strong>{bet}</strong> : "Noch keine Wette platziert"}
            </p>
            <p> Streak : {streak}</p>

            <div className={`coin ${flipping ? "flip" : ""}`}>
                {result === "Kopf" && <img src={kopf} alt="Kopf" className="coin-img" />}
                {result === "Zahl" && <img src={zahl} alt="Zahl" className="coin-img" />}
                {!result && <p>?</p>}
            </div>


           <div className="bet-buttons">
        <button
          className={bet === "Kopf" ? "active" : ""}
          onClick={() => setBet("Kopf")}
          disabled={flipping}
        >
          🪙 Kopf
        </button>

        <button
          className={bet === "Zahl" ? "active" : ""}
          onClick={() => setBet("Zahl")}
          disabled={flipping}
        >
          💰 Zahl
        </button>
      </div>

      <button onClick={flipcoin} disabled={flipping}>
        {flipping ? "Werfe..." : "Münze Werfen"}
      </button>



            <Link to = "/games">
                <button className="back"> ⬅️ </button>
            </Link>

        </main>
    )

}