import { useReducer } from "react";
import { useState } from "react";
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id != action.id);

    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}
function ShoppingCart() {
  const [i, seti] = useState(0);
  const [cart, dispatch] = useReducer(cartReducer, []);
  const sampleItem = { id: i, name: "Laptop", price: 999 };
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name}-${item.price}
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>The Cart Is Empty</p>
      )}
      {/*Add item button */}
      <button
        onClick={() => {
          seti(i + 1);
          dispatch({ type: "ADD_ITEM", item: sampleItem });
        }}
      >
        Add Laptop
      </button>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
}
export default ShoppingCart;
