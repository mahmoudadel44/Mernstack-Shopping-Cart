import React from "react";
import { Select } from "antd";

const Filters = ({ handleFilterBySize, handleFilterBySort, size, sort }) => {
  const { Option } = Select;

  return (
    <div className="card">
      <h6 className="card-header">Filters </h6>
      <div className="card-body text-left">
        <p className="card-title">Number of Products :5 Product</p>
        <h5 className="card-text mt-3">Filter</h5>
        <Select
          onChange={handleFilterBySize}
          value={size}
          style={{width:"250px"}}
        >
          <Option value="ALL">ALL</Option>
          <Option value="XS">XS</Option>
          <Option value="S">S</Option>
          <Option value="M">M</Option>
          <Option value="L">L</Option>
          <Option value="XL">XL</Option>
          <Option value="XXL">XXL</Option>
        </Select>
        <h5 className="card-text mt-3">Sort</h5>
        <Select
          defaultValue="lucy"
          style={{ width: 250 }}
          onChange={handleFilterBySort}
          value={sort}
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
