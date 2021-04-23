import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div>
        {/* Carousel begins */}
        <Carousel style={{ width: "100%" }}>
          <Carousel.Item>
            {" "}
            <img
              style={{ width: 1100, height: 500 }}
              src={process.env.PUBLIC_URL + "./Images/one.jpeg"}
              alt="not found"
            ></img>
          </Carousel.Item>

          <Carousel.Item>
            {" "}
            <img
              style={{ width: 1100, height: 500 }}
              src={process.env.PUBLIC_URL + "./Images/two.jpeg"}
              alt="not found"
            ></img>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
