import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import MyCarousel from "../components/carousel";
import "../App.css";
import bookDatas, { Book } from "../data/bookData";
import { Link } from "react-router-dom";
import BookItem from "../components/bookItem";

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
              <BookItem key={book.id} book={book} /> // book={book} 이 프롭스
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Content;
