import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  const toyCollection = toys.map(toy => <ToyCard key={toy.id} toy={toy} />)

  return (
    <div id="toy-collection">{toyCollection}</div>
  );
}

export default ToyContainer;
