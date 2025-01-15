import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

function MyOrder() {
    const { order } = useContext(ShoppingCartContext);

    const path = window.location.pathname;
    const index = path.lastIndexOf("/") + 1;
    let item = path.substring(index);
    if (item === 'last') {
      item = order?.length - 1;
    }

    return (
      <Layout>
        <div className="flex w-80 justify-center items-center relative mb-6">
          <Link to="/my-orders" className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer " />
          </Link>
          <h1>My orders</h1>
        </div>
         <div className="flex flex-col w-80">
            {order[item]?.products?.map((item) => (
              <OrderCard 
                key={`${item.id}-${item.title}`} 
                id={item.id}
                title={item.title} 
                imageUrl={item.images[0]} 
                price={item.price}         
                />
            ))}
          </div>
      </Layout>
    )
  }
  
  export { MyOrder }
  