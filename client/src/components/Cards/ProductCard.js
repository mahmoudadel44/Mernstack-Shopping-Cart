import { Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/CartActions";

import "../Products/Products.scss";
const ProductCard = ({ productData }) => {
  const { Meta } = Card;
  const cartItems = useSelector((state) => state.Cart?.cartItems);
  const dispatch = useDispatch();

  return (
    <>
      <div className="col-lg-6 allCards col-sm-12 mb-3">
        <div
          className="card animate__animated py-3
            animate__fadeInLeft"
          style={{ width: "18rem" }}
        >
          <img
            alt="example"
            src={productData.image}
            height="160px"
            className="m-auto"
          />
          <div className="card-body pb-0">
            <h5 className="card-title">{productData.title}</h5>
            <h5 className="mt-2 text-muted">${productData.price}</h5>
            <p className="card-text">
              {productData?.description.slice(1, 80) + "........."}
            </p>
            <button
              // to={`/product/${productData.id}`}
              className="btn btn-success m-auto"
              style={{ boxShadow: "none" }}
              onClick={(e) => {
                dispatch(addToCart(cartItems, productData));
                e.stopPropagation();
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
