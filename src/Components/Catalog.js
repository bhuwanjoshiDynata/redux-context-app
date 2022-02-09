import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css';
import Product from './Product';
import Total from './Total';
//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

const Catalog = () => {

const data = useSelector(state => state.data)
const dispatch = useDispatch();

//const [data, setdata]= useState("");
//const [total, setTotal] = useState(0);
console.log(data);

// useEffect(()=>{
// fetch("http://localhost:8000/data").then(response => {
//     //console.log("response: ",response)
//     return response.json();
// }).then(data =>{
//     console.log("data: ",data);
//     setdata(data);
// }).catch(err =>{
//     console.log("Error: ",err);
// });
// },[]);

    return (
        <div>
            <div>
            {data && data.map(data =>(
                <Product data={data} />
            ))}
            </div>
            {/* {data && <Total data={data}/>} */}
        </div>

    )
}



export default Catalog;