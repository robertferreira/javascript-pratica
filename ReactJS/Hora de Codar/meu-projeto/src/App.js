import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {

  const [nome, setNome] = useState();

  return (
    <Router>
      <ul>
        <li><Link to="/"> Home </Link></li>
      </ul>
    </Router>
  );
}

export default App;
