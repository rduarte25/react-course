import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";

import "./styles.css";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
function CheckoutSideMenu() {
  const { isCheckoutOpen, closeCheckout, cart, setCart, setOrder, setSearchByCategory, setSearchByTitle } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filtered = cart.filter((element) => element.id !== id);
    setCart(filtered);
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '15.01.2025',
      products: cart,
      totalProducts: cart.length,
      totalPrice: totalPrice(cart),
    }
    if (cart.length > 0) {
      setOrder((prev) => [...prev, orderToAdd]);
      setCart([]);
      setSearchByCategory(null);
      setSearchByTitle(null);
    }
  }

  return (
    <aside className={`${isCheckoutOpen ? "flex" : "hidden" } checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg z-10`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My orders</h2>
        <div>
          <XMarkIcon 
            onClick={() => closeCheckout()}
            className="size-6 text-black cursor-pointer" 
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {cart.map((item) => (
          <OrderCard 
            key={`${item.id}-${item.title}`} 
            id={item.id}
            title={item.title} 
            imageUrl={item.images[0]} 
            price={item.price}
            onDelete={handleDelete}            
            />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total: </span>
          <span className="font-medium text-2xl">${totalPrice(cart)}</span>
        </p>
        <Link to="/my-orders/last">
          <button 
            className="w-full bg-black py-3 text-white rounded-lg" 
            onClick={() => handleCheckout()}>
              Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }
