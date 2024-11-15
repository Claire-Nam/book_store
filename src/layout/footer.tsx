import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <div>
      <footer
        className="text-white py-1 mt-3"
        style={{ backgroundColor: "#920E1C" }}
      >
        <Container className="text-center">
          Claire
          <br />
          연락처:{" "}
          <a href="mailto: nbr1023@naver.com" className="text-white">
            nbr1023@naver.com
          </a>
          <br />
          Copyright © KOSTA코딩연구소 Crop, All Rights Reserved
          <br />
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
