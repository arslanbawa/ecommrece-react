const fetchProducts = ()=> async (dispatch)=> {
    dispatch(requestProducts())
    try {
         const response = await fetch(`https://fakestoreapi.com/products`)
         const productsData= await response.json();
         dispatch({type: "FETCH_PRODUCTS_SUCCESS", payload: productsData})
  
    }  
    
    catch (error) {
        dispatch({type:"FETCH_PRODUCTS_FAILURE", payload:error});
        
    }
}

const requestProducts = ()=>{
    return {
        type: "FETCH_PRODUCTS_REQUEST"
    }
}


export default {
    fetchProducts,
    requestProducts
}
