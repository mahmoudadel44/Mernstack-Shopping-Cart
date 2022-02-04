import React from "react";
import { Divider, Select } from "antd";

const Filters = () => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div class="card text-left">
      <h6 class="card-header">Filters </h6>
      <div class="card-body">
        <p class="card-title">Number of Products :5 Product</p>
        <h5 class="card-text mt-3">Filter</h5>
        <Select
          defaultValue="lucy"
          style={{ width: 250 }}
          onChange={handleChange}
        >
          <Option value="ALL">ALL</Option>
          <Option value="SM">SM</Option>
          <Option value="S">S</Option>
          <Option value="M">M</Option>
          <Option value="L">L</Option>
          <Option value="XL">XL</Option>
          <Option value="XXL">XXL</Option>
        </Select>
        <h5 class="card-text mt-3">Order</h5>
        <Select
          defaultValue="lucy"
          style={{ width: 250 }}
          onChange={handleChange}
        >
          <Option value="latest">Latest</Option>
          <Option value="lowest">Lowest</Option>
          <Option value="highest">Highest</Option>
        </Select>
      </div>
    </div>
  );
};

export default Filters;
