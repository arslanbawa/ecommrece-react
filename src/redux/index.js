import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import allActions from './actions'


const Redux = () => {
  const storeData = useSelector(state=>state)
  const {postItems} = useSelector(state=>state.posts)

  const dispatch = useDispatch()

  const user = {name:'test'}
 

  
  useEffect(() => {
    dispatch(allActions.postActions.fetchPosts())

  }, [])

  console.log([postItems])
  return (
    <div>
          <h1>Hello Redux Thunk</h1>
    </div>
  );
}

export default Redux;
