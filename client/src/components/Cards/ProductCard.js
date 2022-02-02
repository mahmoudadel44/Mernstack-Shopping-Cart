import { Card, Button, Typography } from "antd";
import { Link } from "react-router-dom";
const ProductCard = ({ productData }) => {
  const { Meta } = Card;
  const { Text } = Typography;

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
        <Link to={`./product/${productData.id}`}>
          <Card
            hoverable
            className="productCard animate__animated animate__fadeInLeft"
            cover={
              <img
                alt="example"
                src={productData.imgUrl}
                height="150px"
                width="150px"
              />
            }
          >
            <Meta title={productData.title} />
            <h5 className="mt-2">${productData.price}</h5>

            <Meta
              description={productData.desc.slice(1, 100) + "........."}
              style={{ height: "90px" }}
            />
            <Button
              to={`/product/${productData.id}`}
              block
              className="mt-4 btn-success text-white"
              type="primary"
            >
              Add To Cart
            </Button>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
