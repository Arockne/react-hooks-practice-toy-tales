import React, { useState } from "react";

function ToyCard({ toy, onDonation, onLike }) {
  const {id, name, image, likes} = toy

  function handleDonationClick() {
    onDonation(id)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
  }

  function handleLikeClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: likes + 1 })
    })
    .then(r => r.json())
    .then(data => onLike(data.id, data.likes))
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
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonationClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
