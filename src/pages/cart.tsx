import { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

interface Book {
  id: number;
  title: string;
  quantity: number;
  price: number;
}

const Cart: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "모던자바스크립트&Node.js", quantity: 1, price: 34000 },
    { id: 2, title: "C# 프로그래밍 정석", quantity: 1, price: 25000 },
  ]);

  const calculateTotal = () => {
    return books.reduce((total, book) => total + book.price * book.quantity, 0);
  };

  return (
    <Container>
      <h2>카트</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>상품 정보</th>
            <th>수량</th>
            <th>가격</th>
            <th>주문</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>{book.price.toLocaleString()}원</td>
              <td>
                <Button>주문하기</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row className="mt-4">
        <Col>
          <h5>총 상품 금액: {calculateTotal().toLocaleString()}원</h5>
        </Col>
        <Col className="text-end">
          <Button variant="success">주문</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
