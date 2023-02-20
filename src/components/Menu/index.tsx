import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, HashRouter, Routes, Link } from "react-router-dom";
import Home from '../Home';
import Product from '../Product';

const Menu = () => {
    return (
        <>
            <HashRouter>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        {/* <Navbar.Brand href="#home">Início</Navbar.Brand> */}
                        <Nav className="me-auto">
                            <Link to="/">Início</Link>
                            <Link to="/product">Produtos</Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default Menu;