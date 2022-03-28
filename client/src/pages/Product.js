import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../redux/actions/ProductActions";

const Product = () => {
  const productData = useSelector((state) => state?.Products?.product);
  const dispatch = useDispatch();
  // const productId = window.location.pathname.replace("/", "").split("/")[1];
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  console.log("productData", productData);
  return (
    <section className="singleProduct">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img />
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Product;
