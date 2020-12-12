import React, { useContext, useState } from 'react';

//cuando declaras con export const se terminan definiendo como un objeto
export const AlertContext = React.createContext();

export const useAlertContext = () => useContext(AlertContext);

export default function AlertProvider({ children, orderDefault = {} }) {//[array de items]

    const [order, setOrder] = useState(orderDefault);
    
    return <AlertContext.Provider value={{order, setOrder}}>
        {children}
    </AlertContext.Provider>
}