import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';

             
             
             function CartWidget() {
                
    return (<div style = {{fontSize: 'large', }}>
        <Link to='/cart'>
        <ShoppingCartIcon/>
        </Link>
        </div>
    )
}

                
            

export default CartWidget;