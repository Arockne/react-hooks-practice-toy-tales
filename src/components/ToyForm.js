import React, { useState } from "react";

function ToyForm({ onAddingToy }) {
  const [formData, setFormData] = useState({ 
    name: '',
    image: ''
  })

  function handleFormData(event) {
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newToy = { ...formData, likes: 0 }

    setFormData({ name: '', image: '' })

    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(onAddingToy)

  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleFormData}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleFormData}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
