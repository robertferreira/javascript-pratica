import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter> 
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Company">Empresa</Link>
        <Link to="/Contact">Contato</Link>
        <Link to="/NewProject">Novo Projeto</Link>
      </ul>

        <Container>
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Company" element={<Company/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/NewProject" element={<NewProject/>}/>    
          </Routes>
        </Container>

      <p>Footer</p>

    </BrowserRouter>
  );
}

export default App;
