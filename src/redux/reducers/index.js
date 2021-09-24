import products from './products'
import cartData from './cart'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    products,
    cartData
})

export default rootReducer