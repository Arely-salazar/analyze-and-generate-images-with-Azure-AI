import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>
        Computer vision
      </h1>
      <p>
        Insert URL or type prompt:
      </p>
      <label htmlFor="imagen-url"> </label>
      <input id="imagen-url" type="text" name="imagen" placeholder="introduzca la url a analizar o un texto para generar una imagen" />
      <br/>
      <button type="button">Analizar</button>
      <button type="button">Generar</button>
    </div>
 
  );
}

export default App;
