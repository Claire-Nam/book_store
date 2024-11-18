import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const About: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    // hidden 클래스를 가진 모든 요소를 선택
    const elements = document.querySelectorAll(".hidden");
    elements.forEach((elem) => {
      //
      observer.observe(elem);
    });
  }, []);

  return (
    <div>
      <Container>
        <Row className="align-item-center">
          {/* 소개 섹션 */}
          <Col md={6} className="header_left hidden">
            <header className="header_left_intro">Claire</header>
            <header className="header_left_introduce">Hello</header>
            <header className="header_left_introduce">
              Welcome to my BookStore :)
            </header>
            <div className="header_left_introduce_body_container">
              <span className="header_left_introduce_body">
                This page is just test page for studying react library
              </span>
              <br />
              <span className="header_left_introduce_body">
                it means you can't buy any books from this website unfortunately
              </span>
              <br />
              <span className="header_left_introduce_body">
                So, please just enjoy the website and leave the site.
              </span>
              <br />
              <span className="header_left_introduce_body">
                Thank you for coming my website!
              </span>
            </div>

            <div>
              <a href="">
                <button className="btn_header">블로그</button>
              </a>
            </div>
          </Col>

          {/* 이미지 섹션 */}
          <Col style={{ marginTop: "95px" }}>
            <img
              src="./img/profile.jpg"
              width={"70%"}
              style={{ borderRadius: "180px" }}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
