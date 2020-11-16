import { findByLabelText } from '@testing-library/react';
import React from 'react';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';


function NavBar(){
    const cart = useCartContext();
    return <div>
     
        <div style ={{width : '100%' , height :'100px', background: 'rgb(245,236,188)',
background: 'linear-gradient(90deg, rgba(245,236,188,1) 62%, rgba(245,235,186,1) 62%, rgba(252,176,69,1) 100%)',
display:'flex', flexDirection:'row', justifyContent: 'space-around', 
    }}>
       <h2 style={{ marginTop: 20, fontFamily: 'Syne Mono'}}>LT XOXO</h2>
     
       
        <CartWidget style={{ marginTop: 20}}></CartWidget>
        
            <ul style={{display: 'flex', alignItems : 'flex start', flexDirection: 'row', flexWrap : 'wrap'
              , justifyContent: 'space-between', alignContent: 'flex-start', marginTop:'20px'
        }}>
              
                

                <Link to="/">
                <li style={{display:'inline', marginRight:20}}>HOME</li>
                </Link>

                <Link to="/list">
                <li style={{display:'inline', marginRight:20}}>LISTADO</li>
                </Link>
                <Link to="/about">
                <li style={{display:'inline', marginRight:20}}>ABOUT US</li>
                </Link>
           


        
        
        </ul>
        
        </div>
        
    </div>
    
}

export default NavBar;
