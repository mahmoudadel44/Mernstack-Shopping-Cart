import React from "react";
import { Link } from "react-router-dom";

//images
import NotFoundImg from "../../assets/imgs/notFoundImg.jpg";

//Css
import "../../css/NotFound/NotFound.css";
const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <img src={NotFoundImg} alt="notfoundimg" height={500} width={500} />
      <Link to={"/"}>Go To Home</Link>
    </div>
  );
};

export default NotFound;
