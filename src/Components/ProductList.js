import React from "react";
import data from "../Data/data.json";
import Products from "./Products";
import imageMap from "../assets/imageMap";
import "../design/Style.css";



const ProductList = ({products, addToCart}) => {
  return (
    <>
    <h1 className="textHeading">Desserts</h1>
    <div className="product-list">
      
      
      {data.map((product, index) => {
        const imagePaths = {
          thumbnail: imageMap[product.image.thumbnail],
          mobile: imageMap[product.image.mobile],
          tablet: imageMap[product.image.tablet],
          desktop: imageMap[product.image.desktop],
        };

        return (
          <div className="item" key={index}>
            <Products
              name={product.name}
              category={product.category}
              price={product.price}
              image={imagePaths}
              addToCart={()=>addToCart(product)}
              showAddtoCart={false}
            />
          </div>
        );
      })}
    </div>
    </>
  );
};

export default ProductList;
