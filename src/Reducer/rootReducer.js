const initState = {
    data: [
        {
          "id": "1",
          "name": "Rice",
          "Price": "100",
          "quantity": "1kg",
          "number": 0,
          "image": "images/Rice.png"
        },
        {
          "id": "2",
          "name": "Sugar",
          "Price": "50",
          "quantity": "1kg",
          "number": 0,
          "image": "images/Sugar.png"
        },
        {
          "id": "3",
          "name": "Aata",
          "Price": "300",
          "quantity": "5kg",
          "number": 0,
          "image": "images/Aata.png"
        },
        {
          "id": "4",
          "name": "Almond",
          "Price": "1000",
          "quantity": "1kg",
          "number": 0,
          "image": "images/Almond.png"
        }
      ]
}

const rootReducer = (state = initState, action) => {

    //console.log("reducerstate",state)
    switch(action.type){
        case "Add_CART":
        return state.data.map(data=>{
            return {...data,number: 5};
        })
        default:
            return state;
}
    
    
}


export default rootReducer;