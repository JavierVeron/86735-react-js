import { createContext, useState } from "react";
import products from "../../assets/productos.json"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        let product;

        if (isInCart(item.id)) {
            product = cart.find(prod => prod.id == item.id);
            product.quantity += quantity;
            setCart([...cart]);
        } else {
            product = products.find(prod => prod.id == item.id);
            product.quantity = quantity;
            setCart([...cart, product]);
        }
    }

    const removeItem = (id) => {
        const productsFilter = cart.filter(item => item.id != id);
        setCart(productsFilter);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id == id);
    }

    return <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider