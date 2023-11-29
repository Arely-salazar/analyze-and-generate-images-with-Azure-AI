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
      <button onClick={onButtonSubmit}>Analizar</button>
      <button onClick={onButtonSubmit}>Generar</button>
    </div>
  );
}

export default App;
