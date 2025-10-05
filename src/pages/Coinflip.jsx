import { useState} from "react";
import "./Coinflip.css";
import { Link } from "react-router-dom";
import kopf from "../assets/coinflip/kopf.png";
import zahl from "../assets/coinflip/zahl.png";

export default function Coinflip(){

    const [result, setResult] = useState(null);
    const [flipping, setFlipping] = useState(false);

    function flipcoin(){
        setFlipping(true);

        setTimeout(()=>{
            const random = Math.random() < 0.5 ? "Kopf" : "Zahl";
            setResult(random);
            setFlipping(false)
        }, 1000);
    }
    return(
        <main className="coinflip">
            <h1> Münzwurf 🪙 </h1>

            <div className={`coin ${flipping ? "flip" : ""}`}>
                {result === "Kopf" && <img src={kopf} alt="Kopf" className="coin-img" />}
                {result === "Zahl" && <img src={zahl} alt="Zahl" className="coin-img" />}
                {!result && <p>?</p>}
            </div>

            <button onClick={flipcoin} disabled= {flipping}>
                {flipping ? "Werfe..." : "Münze Werfen"}
            </button>

            <Link to = "/games">
                <button className="back"> ⬅️ </button>
            </Link>

        </main>
    )

}