import { findByLabelText } from '@testing-library/react';
import React from 'react';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';


function NavBar(){
    return <div>
     
        <div style ={{width : '100%' , height :'100px', backgroundImage: 'linear-gradient(to right, #d7d2cc 0%, #304352 100%)',
display:'flex', flexDirection:'row', justifyContent: 'space-around', 
    }}>
       <h2 style={{ marginTop: 20, fontFamily: 'Syne Mono'}}>LT XOXO</h2>
     
       
        <CartWidget style={{ marginTop: 20}}></CartWidget>
        <h3>
            <ul style={{display: 'flex', alignItems : 'flex start', flexDirection: 'row', flexWrap : 'wrap'
              , justifyContent: 'space-between', alignContent: 'flex-start', marginTop:'20px'
        }}>
              
                

                <Link to="/">
                <li style={{display:'inline', marginRight:20, fontFamily: 'Syne Mono'}}>INICIO</li>
                </Link>

                <Link to="/list">
                <li style={{display:'inline', marginRight:20, fontFamily: 'Syne Mono'}}>PRODUCTOS</li>
                </Link>
                
           


        
        
        </ul>
        </h3>
        </div>
        
    </div>
    
}

export default NavBar;
