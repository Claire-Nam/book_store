import { Button, Card, Col } from "react-bootstrap";
import { Book } from "../data/bookData";
import { Link } from "react-router-dom";

interface BookItemProps {
  book: Book; // props로 내려주기위해 import Book을 통해 가져온 ../data/bookData의 인터페이스 정의 타입을 가져와서 새로 인터페이스로 재정의.
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <Col
      key={book.id}
      className="box span-4"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        className="border rounded shadow-sm span-3"
        style={{
          height: "500px",
          width: "330px",
          border: "none",
          backgroundColor: "#CECCCD",
        }}
      >
        <Card.Body>
          <Card.Img
            variant="top"
            src={`${process.env.PUBLIC_URL}/img/${book.id + 1}.jpg`}
            style={{
              height: "300px",
              width: "220px",
              objectFit: "cover",
            }}
            alt={book.title}
          ></Card.Img>
          <div className="title">{book.title}</div>
          <div>
            <span>{book.author}</span>
            <p></p>
            <span>{book.star}</span>
          </div>
          <p></p>
          <div>
            <Link to="/detail">
              <Button variant="outline-danger">자세히 보기</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookItem;
