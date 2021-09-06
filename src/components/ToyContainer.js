import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonation, onLike }) {
  const toyCollection = toys.map(toy => <ToyCard key={toy.id} toy={toy} onDonation={onDonation} onLike={onLike} />)

  return (
    <div id="toy-collection">{toyCollection}</div>
  );
}

export default ToyContainer;
