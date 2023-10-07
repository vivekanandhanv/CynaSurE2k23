import React from 'react';
function ProjectExpo() {
    
  
    const cardsData = [
        {
            id: 1,
            imageSrc:"",
            title: 'Project Expo',
            text: 'This is the event conducted by the CSE departmnet of Kgisl Institute of technology'
          }

    ];
  

  return (
<>
<h1 className='card-title'> Elite Event</h1>
<div className='cardcontainer'>
      {cardsData.map((card) => (
        <div className="flip-card" key={card.id}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2>Project Expo</h2>
                {/* <img className="card-img-top" src={card.imageSrc} alt="CardImage cap" /> */}
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

export default ProjectExpo;