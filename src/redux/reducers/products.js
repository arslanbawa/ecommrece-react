const initialState={
    productsData:[],
    loading: false,
    error:null,
}

const products=(state=initialState, action)=>{
    switch(action.type){
        case "FETCH_PRODUCTS_REQUEST":
            return{
                ...state, 
                loading:true,
                error:null,
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return{
                ...state,
                loading:false,
                productsData:action.payload
            }  
        case "FETCH_PRODUCTS_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            }   
        default :
        return state;       
    }
}

export default products;