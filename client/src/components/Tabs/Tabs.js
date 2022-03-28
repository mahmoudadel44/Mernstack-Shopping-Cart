import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/ProductActions";

import "../../css/Tabs/Tabs.css";

const Tabs = () => {
  const categories = useSelector((state) => state.Products.categories);
  const products = useSelector((state) => state.Products.products);

  const dispatch = useDispatch();

  const mens = products.filter((p) => p.category == "men's clothing");
  const womens = products.filter((p) => p.category == "women's clothing");
  const jeweleryes = products.filter((p) => p.category.includes("jewel"));
  const electronics = products.filter((p) => p.category.includes("elect"));

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <ul
        className="nav nav-pills mb-3 d-flex justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-mens-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-mens"
            type="button"
            role="tab"
            aria-controls="pills-mens"
            aria-selected="true"
          >
            Mens' Clothing
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-Womens-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-Womens"
            type="button"
            role="tab"
            aria-controls="pills-Womens"
            aria-selected="true"
          >
            women's clothing
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-jewelery-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-jewelery"
            type="button"
            role="tab"
            aria-controls="pills-jewelery"
            aria-selected="false"
          >
            jewelery
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-electronics-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-electronics"
            type="button"
            role="tab"
            aria-controls="pills-electronics"
            aria-selected="false"
          >
            Electronics
          </button>
        </li>
      </ul>
      <div className="tab-content mt-5" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-mens"
          role="tabpanel"
          aria-labelledby="pills-mens-tab"
        >
          <div className="d-flex justify-content-between images-container">
            {mens &&
              mens.map((men) => (
                <div>
                  <img src={men.image} width={200} height={200} />
                </div>
              ))}
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-Womens"
          role="tabpanel"
          aria-labelledby="pills-Womens-tab"
        >
          <div className="d-flex justify-content-between images-container">
            {womens &&
              womens.map((women) => (
                <div>
                  <img src={women.image} width={200} height={200} />
                </div>
              ))}
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-jewelery"
          role="tabpanel"
          aria-labelledby="pills-jewelery-tab"
        >
          <div className="d-flex justify-content-between images-container">
            {jeweleryes &&
              jeweleryes.map((jewelery) => (
                <div>
                  <img src={jewelery.image} width={200} height={200} />
                </div>
              ))}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-electronics"
          role="tabpanel"
          aria-labelledby="pills-electronics-tab"
        >
          <div className="d-flex justify-content-between images-container">
            {electronics &&
              electronics.map((electronic) => (
                <div>
                  <img src={electronic.image} width={200} height={200} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
