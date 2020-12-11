import { Email } from '@material-ui/icons';
import React, { useState } from 'react';

function Form ({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [remail, setRemail] = useState('');
  const [email, setEmail] = useState('');

  


  return (
    <div style={{color: 'white',fontSize: 25, fontFamily: 'Syne Mono'}}>
      <h1>Formulario</h1>
      <div  style ={{textAlign: '-webkit-left', marginLeft: 600}}>
      <div style={{color:'white'}}>
        Nombre:
        <input 
          value={nombre}
          onChange={(eventDetails) => {
            setNombre(eventDetails.target.value)
          }}
        ></input>
      </div>
      <br/>
      <br/>
      <div style={{color:'white'}}>
        Apellido:
        <input 
          value={apellido}
          onChange={(eventDetails) => {
            setApellido(eventDetails.target.value)
          }}
        ></input>
        </div>
        <br/>
      <br/>
      <div style={{color:'white'}}>
        Email:
        <input 
          value={email}
          onChange={(eventDetails) => {
            setEmail(eventDetails.target.value)
          }}
        ></input>
      </div>
      <br/>
      <br/>
      <div style={{color:'white'}}>
        Repetir-email:
        <input 
          value={remail}
          onChange={(eventDetails) => {
            setRemail(eventDetails.target.value)
          }}
        ></input>
      </div>
      </div>
      
        <br/>
        {email === remail ? (
          <button   onClick={()=> {
            onSubmit({
              email,
              remail
            })
          }}>Comprar</button>
        ): ''}
      </div>
    
  )
}

export default Form