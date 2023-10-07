import React from 'react';
import CodeOlympoics from "./images/C0DE OLYMPICS(SS).png";
import WebDesign from "./images/WEB DESIN (SS).png";
import Tc from "./images/TC(SS).png";
import paperPresentation from "./images/PAPER PRESENTATION(SS).png";
import TechTalk from "./images/TechTalk.png"
function Cards() {
    
  
    const cardsData = [
        {
            id: 1,
            imageSrc:CodeOlympoics,
            title: ' Code Olympics',
            text: 'This is the event conducted by the CSE departmnet of Kgisl Institute of technology'
          },
          {
            id: 2,
            imageSrc: WebDesign,
            title: ' Web Design',
            text: 'This is the event conducted by the CSE darptmnet of Kgisl Institute of technology'
          },
          {
            id: 3,
            imageSrc: Tc,
            title: ' Technical Connection',
            text: 'This is the event conducted by the CSE darptmnet of Kgisl Institute of technology'
          },
          {
            id: 3,
            imageSrc: paperPresentation,
            title: ' Paper Presentation',
            text: 'This is the event conducted by the CSE darptmnet of Kgisl Institute of technology'
          },
          {
            id: 5,
            imageSrc: TechTalk,
            title: ' Tech Talk',
            text: 'This is the event conducted by the CSE darptmnet of Kgisl Institute of technology'
          },

    ];
  

  return (
<>
<h1 className='card-title'>Technical Events</h1>
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
                  <a a href="https://tinyurl.com/Cynosure2k23-Reg" ><button className='card-button'>Register</button></a>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Cards;