import { useContext } from "react"
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

    return (
      <Layout>
        <div className="flex w-80 justify-center items-center relative">
          <h1>My orders</h1>
        </div>
        {order.map((item, index) => (
          <Link 
          key={index}
            to={`/my-orders/${index}`}>
            <OrdersCard 
              key={item} 
              totalPrice={item.totalPrice} 
              totalProducts={item.totalProducts}
            />
          </Link>

        ))}
      </Layout>
    )
  }
  
  export { MyOrders }