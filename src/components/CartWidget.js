import React from 'react';
import 'materialize-css';
import { Icon } from 'react-materialize';

function CartWidget({ style }){
    return  <div style={style}>
                <Icon >shopping_cart</Icon>
            </div>
}

export default CartWidget;