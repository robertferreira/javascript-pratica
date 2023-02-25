import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMySname';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Pessoa nome="Robert" idade="21" profissao="Técnico de Informática" foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  );
}

export default App;
