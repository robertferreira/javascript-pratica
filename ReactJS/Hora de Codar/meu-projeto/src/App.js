import './App.css';
import HelloWorld from './components/HelloWorld.js';

function App() {
  
  const name = 'Robert';

  function sum(a,b){
    return a + b;
  }

  const url = "https://via.placeholder.com/200";

  return (
    <div className="App">
      <h2> Alterando o JSX </h2>
      <p> Olá, {name}</p>
      <p> Soma: {sum(2,2)}</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWorld/>
    </div>
    
  );
}

export default App;
