import React from "react";
import "./HeadOfKite.css"; // Create a CSS file for styling

function HeadOfKite() {
  const teamMembers = [
    {
      name: "Dr.S.Suresh Kumar",
      position: "PRINCIPAL,  KiTE",
      imageSrc: "https://www.kgkite.ac.in/wp-content/uploads/2023/06/Principal-KiTE-3.jpeg", // Add the image file path
    },
    // {
    //   name: "Mr Suresh",
    //   position: "Principal",
    //   imageSrc: "https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_640.jpg", // Add the image file path
    // },
    {
      name: "Dr.T.Thenmozhi",
      position: "HOD/CSE,  KiTE",
      imageSrc: "https://www.kgkite.ac.in/wp-content/uploads/2023/01/Dr.-Thenmozhi-T-CSE-HOD.jpeg", // Add the image file path
    },
  ];

  return (
    <section className="team-section">
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <img src={member.imageSrc} alt={member.name} className="member-image" />
          <h3 className="member-name">{member.name}</h3>
          <p className="member-position">{member.position}</p>
        </div>
      ))}
    </section>
  );
}

export default HeadOfKite;
