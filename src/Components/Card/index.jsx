import PropTypes from "prop-types";
import { useContext } from "react";
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid';


import { ShoppingCartContext } from "../../Context";

Card.propTypes = {
  item: PropTypes.node.isRequired,
};

function Card({item}) {
  const { 
    setCount, 
    openProductDetail, 
    closeProductDetail, 
    setProductDetail, 
    cart,
    setCart, 
    openCheckout 
  } = useContext(ShoppingCartContext);

  const showProduct = () => {
    openProductDetail();
    setProductDetail(item);
  }
  
  const addProductToCart = (event) => {
    event.stopPropagation();
    openCheckout();
    closeProductDetail();
    setCount((prev) => prev +1);
    setCart((prev) => [...prev, item]);
  }

  const renderIcon = () => {
    const isInCart = cart.filter((element) => element.id === item.id);
    if (isInCart.length > 0) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
          onClick={() => {}}
          >
          <CheckIcon className="size-6 text-white" />
        </div>
      )
    }
    return (
      <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        onClick={(event) => addProductToCart(event)}
        >
        <PlusIcon className="size-6 text-black" />
      </div>
    )
  }

  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct()}
      >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{item.category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={item.images[0]} alt={item.title} />
        {renderIcon()}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{item.title}</span>
        <span className="text-lg font-medium">${item.price}</span>
      </p>
    </div>
  )
}

export default Card
