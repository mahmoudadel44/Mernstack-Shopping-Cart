import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/CartActions";
import { getProduct } from "../../redux/actions/ProductActions";

import ReactImageZoom from "react-image-zoom";

import "../Products/Products.scss";
const ProductCard = ({ productData }) => {
  const cartItems = useSelector((state) => state.Cart?.cartItems);
  const dispatch = useDispatch();
  const props = {
    width: 230,
    zoomWidth: 630,
    img: productData.image,
    height: 170,
  };

  return (
    <>
      <div className="col-lg-6 allCards col-sm-12 mb-3 d-flex align-items-center flex-column">
        <Link
          to={`/product/${productData.id}`}
          className="card py-3"
          style={{ width: "18rem", height: "410px" }}
        >
          <div style={{ position: "relative", zIndex: 10000 }}>
            <ReactImageZoom {...props} />
          </div>

          <div className="card-body pb-0">
            <h5 className="card-title">{productData.title}</h5>
            <h6 className="mt-2 text-muted">${productData.price}</h6>
            <p className="card-text">
              {productData?.description.slice(1, 80) + "........."}
            </p>
          </div>
        </Link>
        <button
          className="btn btn-success mt-3"
          onClick={(e) => {
            dispatch(addToCart(cartItems, productData));
            e.stopPropagation();
          }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
