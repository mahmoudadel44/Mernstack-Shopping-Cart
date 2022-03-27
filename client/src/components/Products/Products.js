import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import AllProducts from "../../data/productdata.json";
import CartScreen from "../../pages/CartScreen";
import {
  removeAllProducts,
} from "../../redux/actions/CartActions";
import { getProducts } from "../../redux/actions/ProductActions";
import ProductCard from "../Cards/ProductCard";
import Filters from "../Filters/Filters";

const Products = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.Products.filteredItems);
  const cartItems = useSelector((state) => state.Cart.cartItems);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log("allllll", filteredProducts);
  return (
    <>
      <section className="allProducts">
        <div className="container">
          <h5 className="my-3 title">Latest Products</h5>
          <div className="row text-center">
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {filteredProducts &&
                  filteredProducts.map((product) => (
                    <ProductCard
                      productData={product}
                      key={product.id}
                    />
                  ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <Filters />
              <CartScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
