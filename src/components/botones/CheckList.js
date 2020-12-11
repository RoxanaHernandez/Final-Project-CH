
import * as firebase from 'firebase/app';
import  'firebase/firestore';
 

const db = getFireStore();
const orders = db.collection ('orders');
const newOrder = {
    buyer: newInfo,
    items: cart ,
    date: firebase.firestore.TimeStamp.fromDate(new Date()),
    total:price(),

}

orders.add(newOrder).then(({ id }) => {
        setOrderId(id);

    }).catch(err =>{
    setError(err);
}).finally(()=>{
    setLoading(false)
});    


