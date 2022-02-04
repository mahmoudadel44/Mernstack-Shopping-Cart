import React, { useState } from "react";
import ProductData from "../../data/productdata.json";
import ProductCard from "../Cards/ProductCard";
import Filters from "../Filters/Filters";

const Products = () => {
  const [productData, setProductData] = useState(ProductData);
  return (
    <>
      <section className="allProducts">
        <div className="container">
          <h5 className="my-3 title">Latest Products</h5>

          <div className="row text-center">
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {productData &&
                  productData.map((product) => (
                    <ProductCard productData={product} key={product.id} />
                  ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <Filters />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
