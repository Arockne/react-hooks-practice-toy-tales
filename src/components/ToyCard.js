import React from "react";

function ToyCard({ toy, onDonation }) {
  const {id, name, image, likes} = toy

  function handleClick() {
    onDonation(id)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
