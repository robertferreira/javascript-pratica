import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";

function App() {

  return (
    <Router>
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/empresa"> Empresa </Link></li>
        <li><Link to="/contato"> Contato </Link></li>
      </ul>
      <Routes>
      <Route path='/' exact='true' element={<Home/>}></Route>
            <Route path='/empresa' element={<Empresa/>}></Route>
            <Route path='/contato' element={<Contato/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
