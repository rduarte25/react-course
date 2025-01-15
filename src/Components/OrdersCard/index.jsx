import PropTypes from "prop-types";

OrdersCard.propTypes = {
  totalPrice: PropTypes.number,
  totalProducts: PropTypes.number,
};

function OrdersCard({ totalPrice, totalProducts}) {
  return (
    <div className="flex justify-between items-center mb-2 border-black">
        <p>
            <span>15.01.2025</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>
    </div>
  )
}

export { OrdersCard }
