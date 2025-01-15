import { useState, useEffect } from "react"

import Card from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProducDetail";

function Home() {

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
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
