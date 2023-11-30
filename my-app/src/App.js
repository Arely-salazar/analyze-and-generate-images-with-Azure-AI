import logo from './logo.svg';
import React, { useState, useEffect  } from 'react';
import './App.css';
import analyzeImage from './azure-image-analysis';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null); // generar imagen


  const handleAnalyze = async () => {
    if (!imageUrl) {
      alert('Por favor, ingresa la URL de la imagen.');
      return;
    }
    setLoading(true);
    const analysisResult = await analyzeImage(imageUrl);
    setLoading(false);
    setResults(analysisResult);
  };


  //funcion para generar imagen
  const handleGenerar = async() => {
    // Validación de la URL ingresada
    if (!imageUrl) {
      alert('Por favor, ingresa la URL de la imagen.');
      return;
    }
    setGeneratedImageUrl(imageUrl);
  };

  const DisplayResults = () => {
    if (loading) {
      return <p>Procesando...</p>;
    }

    if (results) {
      return (
        <div>
          <p>Resultados del análisis:</p>
          <p>URL de la imagen: {imageUrl}</p>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      );
    }
    if (generatedImageUrl) {
      return (
        <div>
          <p>Imagen generada:</p>
          <img src={generatedImageUrl} alt="Generated" style={{ maxWidth: '50%' }} />
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
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
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
