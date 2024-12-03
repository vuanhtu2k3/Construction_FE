
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
    return (
        <header>
            <div className='container py-4'>
                <Navbar expand="lg" fixed="top">
                    <Navbar.Brand href="#home" className='nav-link m-3'>

                        <span>Urban </span>
                        Construction</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto  ">
                            <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
                            <Nav.Link href="/about" className='nav-link'>About Us</Nav.Link>
                            <Nav.Link href="/service" className='nav-link'>Services</Nav.Link>
                            <Nav.Link href="/projects" className='nav-link'>Projects</Nav.Link>
                            <Nav.Link href="/blogs" className='nav-link'>Blog</Nav.Link>
                            <Nav.Link href="/contactus" className='nav-link'>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    )
}

export default Header