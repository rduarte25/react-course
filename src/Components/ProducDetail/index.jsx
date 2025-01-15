import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";

import "./styles.css";

function ProductDetail() {
  const { isProductDetailOpen, closeProductDetail, productDetail } = useContext(ShoppingCartContext);
  return (
    <aside className={`${isProductDetailOpen ? "flex" : "hidden" } product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon 
            onClick={() => closeProductDetail()}
            className="size-6 text-black cursor-pointer" 
          />
        </div>
      </div>
      <figure className="px-6">
        <img 
          className="w-full h-full rounded-lg"
          src={productDetail?.images} alt={productDetail.title} />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${productDetail?.price}
        </span>
        <span className="font-medium text-md">
          ${productDetail?.title}
        </span>
        <span className="font-light text-sm">
          ${productDetail?.description}
        </span>
      </p>
    </aside>
  )
}

export { ProductDetail }
