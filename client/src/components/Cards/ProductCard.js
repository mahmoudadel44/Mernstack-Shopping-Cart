import { Card, Button } from "antd";
import { useState } from "react";

import ProductModal from "../ProductModal/ProductModal";
const ProductCard = ({ productData }) => {
  const { Meta } = Card;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
        <a type="primary" onClick={showModal}>
          <Card
            hoverable
            className="productCard animate__animated animate__fadeInLeft"
            cover={
              <img
                alt="example"
                src={productData.imgUrl}
                height="150px"
                width="150px"
              />
            }
          >
            <Meta title={productData.title} />
            <h5 className="mt-2">${productData.price}</h5>

            <Meta
              description={productData.desc.slice(1, 100) + "........."}
              style={{ height: "90px" }}
            />
            <Button
              to={`/product/${productData.id}`}
              block
              className="mt-4 btn-success text-white"
              type="primary"
            >
              Add To Cart
            </Button>
          </Card>
        </a>
        <ProductModal
          handleOk={handleOk}
          handleCancel={handleCancel}
          productData={productData}
          isModalVisible={isModalVisible}
        />
      </div>
    </>
  );
};

export default ProductCard;
