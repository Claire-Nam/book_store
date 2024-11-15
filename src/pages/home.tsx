import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import MyCarousel from "../components/carousel";
import "../App.css";
import bookDatas, { Book } from "../data/bookData";
import BookItem from "../components/bookItem";

const Home: React.FC = () => {
  let [books, setBooks] = useState<Book[]>(bookDatas);
  console.log(books);

  return (
    <div>
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

export default Home;
