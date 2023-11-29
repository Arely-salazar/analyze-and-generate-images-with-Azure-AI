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
      <button type="button">Analizar</button>
      <button type="button">Generar</button>
    </div>
  );
}

export default App;
