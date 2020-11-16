import React ,{ useContext, useState} from 'react';


export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaulCart}){//[array de items]

    const [cart, setCart] = useState([defaultCart]);
    //nuestro almace3n de compras//

    function add(){
    //agrega el item y actualiza el estado
    console.log('agregas un item', item.id)
    };

    function remove(){
        //remueve el item por id y actualiza
        console.log('quitas un item', itemId)

    };
    return <CartContext.Provider value = {cart, add, remove}>
        {children}
    </CartContext.Provider>
};
// proteje las inconsistencias del cart