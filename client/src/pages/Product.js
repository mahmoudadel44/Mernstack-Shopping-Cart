import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../redux/actions/ProductActions";
import Spinner from "../components/Spinner/Spinner";
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
    <>
      {productData.length ? (
        <section className="singleProduct">
          <div className="container">
            <div className="row mt-4">
              <div
                className="col-md-6 d-flex flex-column justify-content-center align-items-center
          "
              >
                <img src={productData.image} alt="productimg" width={400} />
                <span className="text-muted fw-bold mt-3">
                  {productData.category}
                </span>
              </div>
              <div className="col-md-6 pt-5">
                <h2 className="card-title mt-4 text-center">
                  {productData.title}
                </h2>
                <h5 className="mt-2 text-muted text-center mt-3">
                  ${productData.price}
                </h5>
                <p className="card-text lead text-center mt-4">
                  {productData?.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Product;
