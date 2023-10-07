import React from 'react';
import "./Cards2.css";
import Curio from "./images/CURIOPROMPT wo qr.png";
import Pixel from "./images/pixel forge wo qr.png";
import shortFilm from "./images/IMG-20231005-WA0004.jpg";
import Meme from "./images/memelast.png"
import PhotoGraphy from "./images/PHOTOGRAPHY EVENT(SS).png"

function Cards2() {
    
  
    const cardsData = [
        {
            id: 3,
            imageSrc:Curio,
            title: ' Curio Prompt',
            text: 'This is the event conducted by the CSE departmnet of Kgisl Institute of technology'
          },
          {
            id: 3,
            imageSrc: Pixel,
            title: ' Pixel Forge',
            text: 'This is the event conducted by the CSE darptmnet of Kgisl Institute of technology'
          },
          {
            id: 3,
            imageSrc: shortFilm,
            title: ' Short Film',
            text: 'This is the event conducted by the CSE darptmnet of Kgisl Institute of technology'
          },
          {
            id: 3,
            imageSrc: Meme,
            title: ' Meme Master',
            text: 'This is the event conducted by the CSE darptmnet of Kgisl Institute of technology'
          },
          {
            id: 3,
            imageSrc: PhotoGraphy,
            title: ' PhotoGraphy',
            text: 'This is the event conducted by the CSE darptmnet of Kgisl Institute of technology'
          },

    ];
  

  return (
    <>
    <h1 className='card-title'>Non-Technical Events</h1>
<div className='cardcontainer'>
      {cardsData.map((card) => (
        <div className="flip-card" key={card.id}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="card-img-top" src={card.imageSrc} alt="CardImage cap" />
            </div>
            <div className="flip-card-back">
            <div className="card-body">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.text}</p>
                  < a href="https://tinyurl.com/Cynosure2k23-Reg" ><button className='card-button'>Register</button></a>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Cards2;