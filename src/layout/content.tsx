import { Container, Nav, Navbar } from "react-bootstrap";

const Content: React.FC = () => {
  return (
    <Navbar style={{ backgroundColor: "#920E1C" }} data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <h1>BookStore</h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/list">Product</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Content;
