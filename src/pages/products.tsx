import { useEffect, useState } from "react";
import bookdata from "../data/bookData";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import BookItem from "../components/bookItem";

const List: React.FC = () => {
  let [books, setBooks] = useState(bookdata);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      axios
        .get("https://jamsuham75.github.io/image/data2.json")
        .then((res) => {
          console.log(res.data);
          console.log(bookdata);

          // res.data, books 병합
          let result = [...res.data, ...books];
          setBooks(result);
          console.log(result);
          setLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loaded]);

  return (
    <div className="App">
      <Container>
        <div className="project_header_container">
          <h1 className="project_header">도서 리스트</h1>
          <div className="hr"></div>
          <Row>
            {books.map((book) => (
              <BookItem key={book.id} book={book} /> // book={book} 이 프롭스
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default List;
