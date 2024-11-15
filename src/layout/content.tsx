import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../App.css";
import bookDatas, { Book } from "../data/bookData";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about";
import List from "../pages/products";
import Contact from "../pages/contact";
import Login from "../pages/login";
import Cart from "../pages/cart";
import ProductDetail from "../pages/detail";
import Home from "../pages/home";

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

      {/* 라우터 설정 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="contacts" element={<Contact />}></Route>
        <Route path="/detail" element={<ProductDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
