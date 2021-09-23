const fetchPosts = ()=> async (dispatch)=> {
    dispatch(requestPosts())
    try {
         const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
         const postData= await response.json();
         dispatch({type: "FETCH_POSTS_SUCCESS", payload: postData})
  
    }  
    
    catch (error) {
        dispatch({type:"FETCH_POSTS_FAILURE", payload:error});
        
    }
}

const requestPosts = ()=>{
    return {
        type: "FETCH_POSTS_REQUEST"
    }
}


export default {
    fetchPosts,
    requestPosts
}
