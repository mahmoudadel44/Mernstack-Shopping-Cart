import React from "react";
import { Link } from "react-router-dom";

//images
import NotFoundImg from "../../assets/imgs/notFoundImg.jpg";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <img src={NotFoundImg} alt="notfoundimg" height={500} width={500} />
      <Link to={"/"}>Go To Pokemons</Link>
    </div>
  );
};

export default NotFound;
