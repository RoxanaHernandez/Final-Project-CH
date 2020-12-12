import React from 'react';
import Cart from './Cart'
import firebase from 'firebase/app';
import { getFirestore } from '../firebase/indexfb';



const addOrder = (order) => {
  const db = getFirestore();
  const ordersCollection = db.collection('orders');
  order.date = firebase.firestore.Timestamp.fromDate(new Date());
  const res = ordersCollection.add(order)

  return res
    .then((order) => order.get())
    .then((order) => {
      const orderData = order.data()
      return {
        ...orderData,
        id: order.id,
        date: orderData.date.toDate(),
      };
    });
};

function CartContainer({ categoryId }) {
 
  return (
    <Cart onOrder={addOrder}></Cart>
  )
};

export default CartContainer;