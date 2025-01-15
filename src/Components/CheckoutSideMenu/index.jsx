import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";

import "./styles.css";
import OrderCard from "../OrderCard";
function CheckoutSideMenu() {
  const { isCheckoutOpen, closeCheckout, cart } = useContext(ShoppingCartContext);

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
      <div className="px-6 overflow-y-scroll">
        {cart.map((item) => (
          <OrderCard 
            key={`${item.id}-${item.title}`} 
            title={item.title} 
            imageUrl={item.images[0]} 
            price={item.price}/>
        ))}
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
