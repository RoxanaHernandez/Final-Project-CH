import React from 'react';
import { useAlertContext } from '../context/AlertContext';


function Alert({}){
    const alert = useAlertContext()
    return (
        <div style={{ color: 'white', fontSize: 50, fontFamily: 'Syne Mono', marginLeft: 50 }}>
            <h1 >Se creo la order {alert.order.id}</h1>
            <h2> el dia {alert.order.date.toString()}</h2>
        </div>
    )
}
 export default Alert;