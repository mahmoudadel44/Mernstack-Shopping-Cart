import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

import "../../css/Carousel/Carousel.css";
const Crousel = () => {
  const Products = useSelector((state) => state.Products.filteredItems);

  return (
    <div style={{ display: "block", width: "100%", padding: 120 }}>
      <Carousel>
        {Products &&
          Products.map((product,index) => (
            <Carousel.Item interval={1500} key={index}>
              <img
                className="d-block w-50 m-auto"
                src={product.image}
                key={product.image}
                alt="Image One"
                height={400}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default Crousel;
