import { Button, Container, Form } from "react-bootstrap";

const Contact: React.FC = () => {
  return (
    <Container>
      <h1>Business</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100">이름</Form.Label>
          <Form.Control type="text" placeholder="이름 입력"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100">이메일</Form.Label>
          <Form.Control type="text" placeholder="이메일 입력"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100">내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="내용 입력"
          ></Form.Control>
        </Form.Group>

        <Button
          type="submit"
          className="w-100"
          variant="outline-warning"
          style={{ height: "60px" }}
        >
          접수하기
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
