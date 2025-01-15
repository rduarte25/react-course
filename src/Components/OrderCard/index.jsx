import { XMarkIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types";

OrderCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
};

function OrderCard({ title, imageUrl, price }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img src={imageUrl} alt={title} className="w-full h-full rounded-lg object-cover"/>
        </figure>
      </div>
      <div className="flex items-center gap-2 px-2">
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <XMarkIcon 
          onClick={() => {}}
          className="size-6 text-black cursor-pointer" 
        />
      </div>
    </div>
  )
}

export default OrderCard
