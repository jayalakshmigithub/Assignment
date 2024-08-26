import React,{useState} from "react";
import data from "../Data/data.json";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiPizza } from "react-icons/ci";

const Cart = ({cartItems,removeItemsCart,itemCount}) => {
  const [itemsCount,setitemsCount] = useState(1)
  const handleIncrease=()=>{
    setitemsCount(itemsCount+1)
  }
  const handleDecrease=()=>{
    if(itemsCount>1){
      setitemsCount(itemsCount-1)
    }
    
  }

  return (
    <div className="cartTab">
      <h1>Your Cart ({itemCount})</h1>
      <div className="listcart">
        {cartItems.length>0?(
        cartItems.map((product, index) => (
          <div className="cart-item" key={index}>

            <div className="product-header">
            
            <h4>{product.name}</h4>
            <span className="closeBar" onClick={()=>removeItemsCart(index)}>
              <IoMdCloseCircleOutline /></span>
           
            </div>
            <div className="product-details">
              <div className="quantity">
              <span className="minus" onClick={handleDecrease}>-</span>
              <span>{itemsCount}</span>
              <span className="plus" onClick={handleIncrease}>+</span>
            </div>
           
              <p>Price: ${(product.price * itemsCount).toFixed(2)}</p> 
             
            </div>
           
          </div>
        ))
      ):(
        <div class="card" >
        <div class="card-overlay"> </div>
        <div class="card-inner" > Your added items will appear here
        <CiPizza className="pizzaIcon"/>
        </div>
       
      </div>
      )}
      </div>
      {cartItems.length>0 &&(
      <div className="btn">
       
        <button className="order">Confirm order</button>
      </div>
      )}
       
    </div>
  );
};

export default Cart;
