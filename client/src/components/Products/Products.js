import { Button } from "antd";
import React, { useEffect, useState } from "react";
import AllProducts from "../../data/productdata.json";
import CartScreen from "../../pages/CartScreen";
import ProductCard from "../Cards/ProductCard";
import Filters from "../Filters/Filters";

const Products = () => {
  const [productData] = useState(AllProducts);
  const [size, setSize] = useState("ALL");
  const [sort, setSort] = useState("latest");
  const [filteredProducts, setFilteredProducts] = useState(AllProducts);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const handleFilterBySize = (value) => {
    setSize(value);
    if (value === "ALL") {
      setFilteredProducts(AllProducts);
    } else {
      let productsClone = [...productData];
      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(value) !== -1
      );
      setFilteredProducts(newProducts);
    }
  };

  const handleFilterBySort = (value) => {
    setSort(value);
    let clonedProducts = [...AllProducts];
    let sortedProducts = clonedProducts.sort((a, b) =>
      value === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : value === "highest"
        ? a.price < b.price
          ? 1
          : -1
        : value === "latest"
        ? a.id > b.id
          ? 1
          : -1
        : null
    );
    setFilteredProducts(sortedProducts);
  };
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
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
  }, [cartItems]);
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
              <Filters
                handleFilterBySize={handleFilterBySize}
                handleFilterBySort={handleFilterBySort}
                size={size}
                sort={sort}
                productsNumber={filteredProducts.length}
              />
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
