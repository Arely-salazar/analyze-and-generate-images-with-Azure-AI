// azure-image-analysis.js
import axios from 'axios';

const analyzeImage = async (imageUrl, features) => {
  try {
    const response = await axios.post(
      'https://analisisimagen20223.cognitiveservices.azure.com/vision/v4.0/analyze',
      {
        url: imageUrl,
        visualFeatures: features || 'Categories,Description,Color',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': process.env.REACT_APP_AZURE_VISION_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
};

export default analyzeImage;
