import React, { useState } from "react";
import ProductData from "../../data/productdata.json";
import ProductCard from "../Cards/ProductCard";

const Products = () => {
  const [productData, setProductData] = useState(ProductData);
  return (
    <>
      <section className="allProducts">
        <div className="container">
          <h5 className="my-3 title">Latest Products</h5>

          <div className="row text-center">
            <div className="col-md-9">
              <div className="row">
                {productData &&
                  productData.map((product) => (
                    <ProductCard productData={product} key={product.id} />
                  ))}
              </div>
            </div>
            <div className="col-md-3">
              Filters
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
