import React, { useContext, useState } from 'react';

//cuando declaras con export const se terminan definiendo como un objeto
export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children, defaultCart = [] }) {//[array de items]

    const [cart, setCart] = useState(defaultCart);
    //nuestro almace3n de compras//

    function add(item) {
        const itemFound = cart.find((it) => it.id === item.id);// busca para ver si existe 
        if (!itemFound) {
            setCart([...cart, item])
        }
    };

    function remove(itemId) {
        //remueve el item por id y actualiza
        console.log('quitas un item', itemId)
        //antes de terminar cada operacion actualizar el estado
        setCart(cart.filter(item => item.id !== itemId))

    };
    return <CartContext.Provider value={{cart, add, remove}}>
        {children}
    </CartContext.Provider>
    // proteje las inconsistencias del cart
}