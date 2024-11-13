import { useState } from "react";
import { Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import MyCarousel from "../components/carousel";
import "../App.css";
import bookDatas, { Book } from "../data/bookData";

const Content: React.FC = () => {
  let [books, setBooks] = useState<Book[]>(bookDatas);
  console.log(books);

  return (
    <div>
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
      <div>
        <MyCarousel />

        <Container>
          <div className="project_header_container">
            <h2 className="project_header">베스트 셀러</h2>
            <div className="hr"></div>
          </div>
          <Row className="text-centre">
            {books.map((book) => (
              <Col key={book.id} className="box p-4">
                <Card
                  className="border rounded shadow-sm p-3"
                  style={{ height: "500px", width: "330px" }}
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={`${process.env.PUBLIC_URL}/img/${book.id + 1}.jpg`}
                      style={{
                        height: "240px",
                        width: "173px",
                        objectFit: "cover",
                      }}
                      alt={book.title}
                    ></Card.Img>
                  </Card.Body>
                </Card>
                {book.title}
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Content;
