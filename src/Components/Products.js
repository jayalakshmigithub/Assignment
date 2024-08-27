import React from "react";
import { MdShoppingCart } from "react-icons/md";

const Product = ({ name, price, category, image, showAddtoCart = true , addToCart}) => {
  
  console.log("name", name);
  return (
    <div className="product">
     
      <img src={image.desktop} alt={name} />

      {!showAddtoCart && (
        <div className="btnContainer">
          <button className="CartBtn" onClick={addToCart}>
            <span className="IconContainer">
              <MdShoppingCart className="icon" />
            </span>
            <p className="text">ADD TO CART</p>
          </button>
        </div>
      )}

      <p className="category">{category}</p>
      <h2 className="productName">{name}</h2>
      <p className="price">${price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
