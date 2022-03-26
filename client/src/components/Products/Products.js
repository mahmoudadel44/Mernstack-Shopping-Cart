import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import AllProducts from "../../data/productdata.json";
import CartScreen from "../../pages/CartScreen";
import { getProducts } from "../../redux/actions/ProductActions";
import ProductCard from "../Cards/ProductCard";
import Filters from "../Filters/Filters";

const Products = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.Products.filteredItems);
  // const [filteredProducts, setFilteredProducts] = useState(AllProducts);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    let cartItemsCloned = [...cartItems];
    let isProductExist = false;
    cartItemsCloned.forEach((p) => {
      if (p.id == product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsCloned.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsCloned);
  };
  const removeFromCart = (product) => {
    let clonedCartItems = [...cartItems];
    let result = clonedCartItems.filter((p) => p.id !== product.id);
    setCartItems(result);
  };
  const removeAllProducts = () => {
    setCartItems([]);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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
                      addToCart={addToCart}
                    />
                  ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <Filters />
              <CartScreen
                removeFromCart={removeFromCart}
                removeAllProducts={removeAllProducts}
                cartItems={cartItems}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
