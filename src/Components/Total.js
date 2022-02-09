import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Total = () => {

    const [total, setTotal] = useState(0);
    let sum = 0;
    
    const data = useSelector(state => state.data)
    const dispatch = useDispatch();

    useEffect(() =>{
        data.forEach(data =>{
        sum = sum + parseInt(data.number)
        
    });
    //console.log(sum);
    setTotal (sum);
},[data]);
   
    return (
        <div>
        {<h1>Total amount: {total}</h1>}
        </div>
    )
}

export default Total;
