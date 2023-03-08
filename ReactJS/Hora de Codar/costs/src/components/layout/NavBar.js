import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'

function NavBar() {
    return (
        <nav>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/Company">Empresa</Link> </li>
                    <li> <Link to="/Contact">Contato</Link> </li>
                    <li> <Link to="/NewProject">Novo Projeto</Link> </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar;