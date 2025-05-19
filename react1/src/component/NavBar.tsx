import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const navLinks = [
        { path: '/customer', label: 'Customer' },
        { path: '/item', label: 'Item' },
        { path: '/order', label: 'Order' },
        { path: '/orderDetail', label: 'Order Detail' }
    ];

    return (
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">MyApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
