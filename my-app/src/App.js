import logo from './logo.svg';
import React, { useState, useEffect  } from 'react';
import './App.css';
import analyzeImage from './azure-image-analysis';
import generateImage from './azure-image-generation';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');


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

  const handleGenerateImage = async () => {
    try {
      setLoading(true);
      const apiKey = 'TU_CLAVE_API_OPENAI'; // Reemplaza con tu clave API de OpenAI
      const result = await generateImage(inputText, apiKey);
      setGeneratedImage(result);
    } catch (error) {
      console.error('Error generando imagen:', error);
    } finally {
      setLoading(false);
    }
  };

  const DisplayResults = () => {
    return (
      <div>
        {loading && <p>Generando imagen...</p>}
        {generatedImage && <img src={generatedImage} alt="Generated" />}
      </div>
    );
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
