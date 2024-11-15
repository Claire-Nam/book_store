import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { Book } from "../data/bookData";
import { useEffect } from "react";

interface LocationState {
  book: Book;
}

const ProductDetail: React.FC = () => {
  const { sku } = useParams<{ sku: string }>();
  const location = useLocation();
  const { state } = location as { state: LocationState }; // bookItem에서 state로 넘어온 BookData (일종의 프롭스);

  const book = state?.book;

  // 1회성 팝업창 띄우기
  useEffect(() => {
    const popup = window.open("", "_blank", "width=400, height=300");
    if (popup) {
      popup.document.write(
        `<html>
                <head>
                    <title>초특가 할인</title>
                </head>
                 <body style="display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #FEF2C1; color: white; flex-direction: column;">
                        <h1 style="margin: 0; font-size: 2em; font-weight: bold;">전 도서 20% 할인!!</h1>
                        <h3 style="margin-top: 10px;">완전 럭키비키잖아</h3>
                    </body>
            </html>`
      );
      return () => {
        if (popup) popup.close();
      };
    }
  }, []);

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/img/" + (book.id + 1) + ".jpg"}
                style={{ borderRadius: "8px" }}
              ></Card.Img>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0">
              <Card.Body>
                <Card.Title as="h2" className="mb-4">
                  {book.title}
                </Card.Title>
                <Card.Text as="h5" className="text-muted mb-4">
                  {book.content}
                </Card.Text>
                <Card.Text as="p" className="text-primary mb-4">
                  {book.price}원
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    console.log("클릭");
                  }}
                >
                  장바구니 담기
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
