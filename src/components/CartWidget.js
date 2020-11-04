import React from 'react';
import 'materialize-css';
import { Icon } from 'react-materialize';
import {Link} from 'react-router-dom';

function CartWidget({ style }){
    return  <div style={style}>
             <Link>
                <Icon >shopping_cart</Icon>
                </Link>
            </div>
}

export default CartWidget;