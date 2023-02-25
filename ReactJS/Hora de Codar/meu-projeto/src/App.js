import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMySname';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Pessoa nome="Robert" idade="21" profissao="Técnico de Informática" foto="https://via.placeholder.com/150"/>
    </div>
    
  );
}

export default App;
