import products from './products'
import cartData from './cart'
import currentUser from './currentUser'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    products,
    cartData,
    currentUser
})

export default rootReducer