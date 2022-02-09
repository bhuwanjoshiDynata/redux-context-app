import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Checkout = () => {

//const [GetData, setGetData] = useState("");
const [Total, setTotal]= useState(0);
//const [data, setData]= useState(null);
let sum = 0;

const data = useSelector(state => state.data)
const dispatch = useDispatch();

data.forEach(data =>{
    sum = sum + (parseInt(data.number)*parseInt(data.Price))
});
useEffect(()=> {
    setTotal(sum)
},[]);

// useEffect(()=> {
// fetch("http://localhost:8000/data").then(response => {
//     //console.log("response: "+response)
//     return response.json();
// }).then(data =>{
//     //setGetData (data);
//     console.log("checkout Data: ",data);
//     data.forEach(data =>{
//     sum = sum + (parseInt(data.number)*parseInt(data.Price))
//     });
//     setTotal(sum)
//     setData(data)
// }).catch(err =>{
//     console.log("Error: "+err);
// })
// },[]);

return (
        <div>
           {data && <p>Total payment need to be done: <b>{Total}</b> INR</p>}
        </div>
    )
}

export default Checkout;