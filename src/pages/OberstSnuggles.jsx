import "./OberstSnuggles.css";
import Snuggles from "../assets/Snugglesloost.mov"
import heheheha from "../assets/heheheha.jpg"
import heheheha2 from "../assets/heheheha2.jpeg"
import { Link } from "react-router-dom";

export default function OS(){

    return(
    <main className="OS"> 
       <h1>Oberstsnuggles</h1> 
        <p> warum ist er so schlecht in CR? </p>

        <video
        src={Snuggles} height={380} width={220}
        controls
        autoPlay
        muted
        loop
        style={{ borderRadius: "10px", marginTop: "20px" }}
        />
        <img src ={heheheha} width={100}  className="heheheha"/>
        <img src ={heheheha2} width={200} className="hehehehawide"/>
        
      <Link to="/">
        <button>⬅️ Zurck zur Startseite</button>
      </Link>

    </main>
    );
}