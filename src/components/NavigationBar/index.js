import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Oti Visan</Navbar.Brand>
        <Link to="/about-me" className="nav-link">
          About Me
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/my-app" className="nav-link">
          My App
        </Link>
        <Link to="/contact-me" className="nav-link">
          ContactMe
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
