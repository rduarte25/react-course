import { useContext } from "react"

import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProducDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {

  const { items, setSearchByTitle} = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80 justify-center items-center relative mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input 
        className="border border-black rounded-lg w-80 p-4 mb-4 focus:outline-none"
        type="text" 
        placeholder="Search a product" 
        onChange={(event) => setSearchByTitle(event.target.value)}
        />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items && items.map((item) => (
          <Card key={item.id} item={item}/>
        ))}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
