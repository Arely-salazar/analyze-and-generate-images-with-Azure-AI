
import axios from 'axios';

// azure-image-analysis.js
const analyzeImage = async (imageUrl) => {
    const apiKey = 'ff819f39b7184af8807f0e4a352b9b5c'; // Reemplaza con tu clave de API de Azure
    const endpoint = 'https://analisisimagen2023.cognitiveservices.azure.com/'; // Reemplaza con tu endpoint de Azure
  
    const apiUrl = `${endpoint}vision/v3.1/analyze?visualFeatures=Description,Tags&language=en`;


  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': apiKey,
        },
        body: JSON.stringify({ url: imageUrl }),
      });
  
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        console.error('Error en la solicitud de análisis de imagen:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error en la solicitud de análisis de imagen:', error.message);
      return null;
    }
  };
  
  export default analyzeImage;
  
