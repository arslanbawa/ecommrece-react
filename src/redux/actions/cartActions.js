     const addProduct= (data) =>
{
    return{
        type:'ADD_PRODUCT',
        payload:data
    }
}
 const updateProducts = (data) =>
{
    return{
        type:'UPDATE_PRODUCTS',
        payload:data
    }
}

export default {addProduct, updateProducts}