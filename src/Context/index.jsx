import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react"; 

const ShoppingCartContext = createContext();

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


function ShoppingCartProvider({children}) {
    const [ count, setCount ] = useState(0);
    const [ isProductDetailOpen, setIsProductDetailOpen ] = useState(false);
    const [ isCheckoutOpen, setIsCheckoutOpen ] = useState(false);

    const openProductDetail = () => {
        setIsProductDetailOpen(true);
    }
    const closeProductDetail = () => {
        setIsProductDetailOpen(false);
    }

    const openCheckout = () => {
        setIsCheckoutOpen(true);
    }
    const closeCheckout = () => {
        setIsCheckoutOpen(false);
    }

    const [ productDetail, setProductDetail ] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    });

    const [cart, setCart] = useState([]);

    const [order, setOrder] = useState([]);

    const [items, setItems] = useState(null);

    const [searchByTitle, setSearchByTitle] = useState(null);   
    
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <ShoppingCartContext.Provider
            value={{ 
                count,
                setCount,
                isProductDetailOpen,
                openProductDetail,
                closeProductDetail,
                productDetail,
                setProductDetail,
                cart,
                setCart,
                openCheckout,
                closeCheckout,
                isCheckoutOpen,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>    
    );
}

export { ShoppingCartProvider, ShoppingCartContext }