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

    const [filteredItems, setFilteredItems] = useState(null);

    const [items, setItems] = useState(null);

    const [searchByTitle, setSearchByTitle] = useState(null);

    const [searchByCategory, setSearchByCategory] = useState(null);   
    
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter((element) => element.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter((element) => element.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }

    const filteredItemsByTitleAndCategory = (items, searchByCategory) => {
        return items?.filter((element) => element.title.toLowerCase().includes(searchByTitle.toLowerCase()) && element.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }

    useEffect(() => {
        if (searchByTitle && !searchByCategory) {
            setFilteredItems(filteredItemsByTitle(items, searchByTitle));
        }
        if (searchByCategory && !searchByTitle) {
            setFilteredItems(filteredItemsByCategory(items, searchByCategory));
        }

        if (searchByCategory && searchByTitle) {
            setFilteredItems(filteredItemsByTitleAndCategory(items, searchByCategory));
        }
        if (!searchByCategory && !searchByTitle) {
            setFilteredItems(items);
        }
    }, [items, searchByTitle, searchByCategory]);

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
                filteredItems,
                setFilteredItems,
                searchByCategory,
                setSearchByCategory,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>    
    );
}

export { ShoppingCartProvider, ShoppingCartContext }