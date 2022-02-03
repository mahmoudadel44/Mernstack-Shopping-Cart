import React from "react";
import { Card, Modal } from "antd";

const ProductModal = ({
  productData,
  handleCancel,
  handleOk,
  isModalVisible,
}) => {
  const { Meta } = Card;

  return (
    <Modal
      title="Product Details"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <img
        alt="example"
        src={productData.imgUrl}
        height="280px"
        width="380px"
        style={{ marginLeft: "18px" }}
      />
      <Meta
        title={productData.title}
        className="mt-3"
        style={{ marginLeft: "18px" }}
      />
      <h5 className="mt-2" style={{ marginLeft: "18px" }}>
        ${productData.price}
      </h5>
    </Modal>
  );
};

export default ProductModal;
