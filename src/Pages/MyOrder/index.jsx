import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
    const { order } = useContext(ShoppingCartContext);

    return (
      <Layout>
        My order
         <div className="flex flex-col w-80">
            {order?.slice(-1)[0]?.products?.map((item) => (
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
  