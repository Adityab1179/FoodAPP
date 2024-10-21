import { clearList } from "../../utils/Slices/cartSlice";
import ItemList from "../ItemList";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearList());
  };
  const CartItem = useSelector((store) => store.cart.items);
  return (
    <div className="mx-40 flex flex-col items-center">
      <h1 className="font-bold text-xl p-2 m-2 text-center">Cart</h1>
      {CartItem.length == 0 ? (
        <h1 className="text-center font-bold text-2xl">Your Cart is Empty</h1>
      ) : (
        <button
          className="bg-black text-white rounded-lg p-2"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      )}
      <ItemList data={CartItem} />
    </div>
  );
};
export default Cart;
