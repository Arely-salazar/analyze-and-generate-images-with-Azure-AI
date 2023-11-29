import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import analyzeImage from './azure-image-analysis';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const analysisResults = await analyzeImage(imageUrl);
      setResults(analysisResults);
    } catch (error) {
      console.error('Error analyzing image:', error);
    } finally {
      setLoading(false);
    }
  };
  //funcion para generar imagen
  const handleGenerar = async () => {
   
  };

  const DisplayResults = () => {
    if (results) {
      return (
        <div>
          <h2>Resultados:</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
          <p>Imagen procesada desde: {imageUrl}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="app-container">
      <h1>
        Computer vision
      </h1>
      <p>
        Insert URL or type prompt:
      </p>
      <input
        type="text"
        placeholder="URL de la imagen"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <br/>
      <button onClick={handleAnalyze} disabled={loading}>
        Analizar
      </button>
      <button onClick={handleGenerar} disabled={loading}>
        Generar
      </button>

      {loading && <p>Procesando...</p>}
      <DisplayResults />
    </div>
 
  );
}

export default App;
