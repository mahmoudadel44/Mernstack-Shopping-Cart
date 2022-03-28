import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartScreen from "../../pages/CartScreen";
import ReactPaginate from "react-paginate";

import { getProducts } from "../../redux/actions/ProductActions";
import ProductCard from "../Cards/ProductCard";
import Filters from "../Filters/Filters";
import NotFound from "../../pages/NotFound";
import Spinner from "../Spinner/Spinner";

const Products = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.Products.filteredItems);
  const loading = useSelector((state) => state.Products.loading);

  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 3;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);


  if (!loading && !filteredProducts) {
    return <NotFound />;
  }
  if (loading) {
    return <Spinner />;
  }

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
                  filteredProducts
                    .slice(pagesVisited, pagesVisited + productsPerPage)
                    .map((product) => (
                      <ProductCard productData={product} key={product.id} />
                    ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <Filters />
              <CartScreen />
            </div>
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </section>
    </>
  );
};

export default Products;
