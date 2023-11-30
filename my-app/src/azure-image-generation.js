// azure-image-generation.js

const generateImage = async (text, apiKey) => {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: text,
          max_tokens: 50,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error generando imagen');
      }
  
      const result = await response.json();
      return result.choices[0].text.trim();
    } catch (error) {
      console.error('Error generando imagen:', error);
      throw error;
    }
  };
  
  export default generateImage;
  