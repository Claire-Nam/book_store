import { Carousel } from "react-bootstrap";

const MyCarousel: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-item-custom">
          <img
            src={process.env.PUBLIC_URL + "img/5.jpg"}
            className="fixed-size-img"
            alt="모던 자바스크립트"
          ></img>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-custom">
          <img
            src={process.env.PUBLIC_URL + "img/6.jpg"}
            className="fixed-size-img"
            alt="앱 인벤터"
          ></img>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-custom">
          <img
            src={process.env.PUBLIC_URL + "img/7.jpg"}
            className="fixed-size-img"
            alt="C# Programming"
          ></img>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
