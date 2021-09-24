const initialData = { 
    cartProducts: []
}

const cartData = (state=initialData, action)=>{

    switch(action.type)
    {
        case "ADD_PRODUCT":
           return {
            ...state,
            cartProducts:[...state.cartProducts, action.payload]
        }
        case "UPDATE_PRODUCTS":
            return{
            ...state,
            cartProducts:action.payload
        }
        default: return state;
    }
}


export default cartData;