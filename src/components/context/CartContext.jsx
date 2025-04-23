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

    const totalProductos = () => {
        return cart.reduce((acum, item) => acum += item.quantity, 0);
    }

    const sumaProductos = () => {
        return cart.reduce((acum, item) => acum += item.price * item.quantity, 0);
    }

    const decrementarItem = (id) => {
        let product = cart.find(prod => prod.id == id);

        if (product.quantity > 1) {
            product.quantity -= 1;
            setCart([...cart]);
        } else {
            removeItem(id);
        }
    }

    const aumentarItem = (id) => {
        let product = cart.find(prod => prod.id == id);
        product.quantity += 1;
        setCart([...cart]);
    }

    return <CartContext.Provider value={{cart, addItem, removeItem, clear, totalProductos, sumaProductos, decrementarItem, aumentarItem}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider