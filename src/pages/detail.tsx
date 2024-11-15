import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { Book } from "../data/bookData";

interface LocationState {
  book: Book;
}

const ProductDetail: React.FC = () => {
  const { sku } = useParams<{ sku: string }>();
  const location = useLocation();
  const { state } = location as { state: LocationState }; // bookItem에서 state로 넘어온 BookData (일종의 프롭스);

  const book = state?.book;

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
