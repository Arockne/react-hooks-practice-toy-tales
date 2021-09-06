import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonation }) {
  const toyCollection = toys.map(toy => <ToyCard key={toy.id} toy={toy} onDonation={onDonation} />)

  return (
    <div id="toy-collection">{toyCollection}</div>
  );
}

export default ToyContainer;
