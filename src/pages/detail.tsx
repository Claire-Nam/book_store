import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ProductDetail: React.FC = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/img/5.jpg"}
                style={{ borderRadius: "8px" }}
              ></Card.Img>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0">
              <Card.Body>
                <Card.Title as="h2" className="mb-4">
                  모던 자바스크립트 & Node.JS
                </Card.Title>
                <Card.Text as="h4" className="text-muted mb-4">
                  입문자를 위한 백엔드 도서입니다.
                </Card.Text>
                <Card.Text as="h5" className="text-primary mb-4">
                  32,900원
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
