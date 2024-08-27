
import React, {useState} from "react";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import Product from "./Components/Products";
import data from './Data/data.json'
import OrderModal from "./Components/OrderModal";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [cartItems , setCartItems] = useState([])
  const addToCart = (product)=>{
    setCartItems([...cartItems,product])

  }
  const removeItemsCart =(index)=>{
    const updateCart = cartItems.filter((_, i)=>i!==index)
    setCartItems(updateCart)
  }
  return (
    <div className="App">
 
      <ProductList products={data} addToCart={addToCart}/>
      <Cart cartItems={cartItems} removeItemsCart={removeItemsCart}
      itemCount ={cartItems.length}/>
    
    </div>
  );
}

export default App;
