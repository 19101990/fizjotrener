import React from 'react'
import {Link} from 'react-router-dom'
import './Hero.css'

function Hero() {
    return (
    <>
      <div className="hero" >
        <div className="hero_txt">
          <h1>Witaj na mojej stronie!</h1>
          <p>Jestem doświadczonym trenerem personalnym z bardzo dużą wiedzą w dziedzinie fizjoterapii zdobytą na studiach oraz dodatkowych kursach. Swoim podopiecznym oferuję profesjonalną i kompleksową opiekę.</p>
          <button>Więcej</button>
        </div>
      </div>     
    </>
    )
}

export default Hero