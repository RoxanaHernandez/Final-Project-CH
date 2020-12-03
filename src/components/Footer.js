
import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer(){
    return <div style ={{width : '100%' , height :'100px', backgroundImage: 'linear-gradient(to right, #d7d2cc 0%, #304352 100%)'}}>
        <h3>
<ul style={{display: 'flex', alignItems : 'flex start', flexDirection: 'row', flexWrap : 'wrap'
              , justifyContent: 'space-between', alignContent: 'flex-start', marginTop:'20px'
        }}>
              
                

                <Link to="/">
                <li style={{display:'inline', marginRight:20, fontFamily: 'Syne Mono'}}>INICIO</li>
                </Link>

                <Link to="/list">
                <li style={{display:'inline', marginRight:20, fontFamily: 'Syne Mono'}}>CONTACTANOS</li>
                </Link>
                
           


        
        
        </ul>
        </h3>
        </div>
        

};