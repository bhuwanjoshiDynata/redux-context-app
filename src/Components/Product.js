import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
const Product = (props) => {

    const [itemnum, setitemnum] = useState(props.data.number)
    const handleplus = (e) =>{
        setitemnum (itemnum +1);
    }
    const handleminus = (e) =>{
        if (itemnum > 0){
            setitemnum (itemnum -1);
        }
    }

    const data = useSelector(state => state.data)
    const dispatch = useDispatch();



    const handleAddCart = (id) => {
        // fetch('http://localhost:8000/data/'+id, {
        // method: 'PATCH',
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(
        //         {"number": itemnum}
        //     ) //Here blog should be an array of object
        // }).then(()=>{
        // //props.setTotal(100)
        // })

        dispatch({type:"Add_CART"});

  }


    const handleReset = (e) =>{
        setitemnum (0)
    }


    return (
        <div className="cat-items"  key={props.data.id}>
                <img src={props.data.image}/>
                <div className="prod-description">
                    <p><b>Item name:</b> {props.data.name}</p>
                    <p><b>Price: </b>{props.data.Price}</p>
                    <p><b>Quantity: </b> {props.data.quantity}</p>
                    <div className="item-input">
                        <button onClick={handleplus}>+</button>
                        <input size="1" type="text" value={itemnum}/>
                        <button onClick={handleminus}>-</button>
                        <div>
                        <button style={{margin:"5px"}} onClick={()=>{handleAddCart(props.data.id)}}>Add to Cart</button>
                        <button style={{margin:"5px"}} onClick={handleReset}>Reset</button>
                        </div>
                    </div>
            </div>
        </div>
            
    
    )
}

export default Product;