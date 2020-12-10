import React from 'react';
import Cart from './Cart'
import firebase from 'firebase/app';
import { getFirestore } from '../firebase/indexfb';



const addOrder = (order) => {
  const db = getFirestore();
  const ordersCollection = db.collection('orders');
  order.date = firebase.firestore.Timestamp.fromDate(new Date());
  const res = ordersCollection.add(order)

  return res.then(({id}) => id);
};

function CartContainer({ categoryId }) {
 
  return (
    <Cart onOrder={addOrder}></Cart>
  )
};

export default CartContainer;