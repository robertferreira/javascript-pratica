import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import NavBar from "./components/NavBar";

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact='true' element={<Home />}></Route>
        <Route path='/empresa' element={<Empresa />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
