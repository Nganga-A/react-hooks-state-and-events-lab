import React, {useState} from "react";

function Item({ name, category }) {

  //track whether item is in cart or not
  const [inCart, setInCart] = useState(false);
 
  //Add To Cart Event Handler
  const handleAddToCart =()=>{
    setInCart(true);
  }

  //Remove from cart Event Handler 
  const handleRemoveFromCart =()=>{
    setInCart(false);
  }

  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {inCart ? (
        <button onClick={handleRemoveFromCart} className="add">Remove From Cart</button>
      ) : (
        <button onClick={handleAddToCart} className="add">Add to Cart</button>
      )}
      
    </li>
  );
}

export default Item;
