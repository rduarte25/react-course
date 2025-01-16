import { ChevronRightIcon } from "@heroicons/react/16/solid";
import PropTypes from "prop-types";

OrdersCard.propTypes = {
  totalPrice: PropTypes.number,
  totalProducts: PropTypes.number,
};

function OrdersCard({ totalPrice, totalProducts}) {
  return (
    <div className="flex justify-between items-center mb-4 border border-black w-80 p-4 rounded-lg">
        <div className="flex justify-between w-full">
          <p className="flex flex-col">
            <span>15.01.2025</span>
            <span className="font-light">{totalProducts} articles</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium text-2xl">${totalPrice}</span>
            <ChevronRightIcon className="h-8 w-8 text-black cursor-pointer" />
          </p>
        </div>
    </div>
  )
}

export { OrdersCard }
