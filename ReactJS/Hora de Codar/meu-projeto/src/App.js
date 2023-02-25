import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMySname';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Robert"/>
    </div>
    
  );
}

export default App;
