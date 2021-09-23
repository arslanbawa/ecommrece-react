import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import allActions from './actions'
const Redux = () => {
  const [temp, setTemp] = useState(0);
  const {productsData}= (useSelector(state=>state.products))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allActions.productActions.fetchProducts())
  }, [temp])

  return (
    <div>
          {/* <h1>Hello Redux Thunk</h1> */}
    </div>
  );
}

export default Redux;
