import React from 'react';

function App() {
  //tirulo de la pagina
  return (
    <div className="app-container">
      <h1>
        Computer vision
      </h1>
      <p>
        Insert URL or type prompt:
      </p>
      <label htmlFor="imagen-url"> </label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
    </div>
  );
}

export default App;
