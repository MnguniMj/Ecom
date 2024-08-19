 import { createStore, combineReducers, applyMiddleware } from 'redux'
 import {thunk} from 'redux-thunk'
 import { composeWithDevTools } from 'redux-devtools-extension'
 import { productListReducer, producDetailsReducer } from './reducers/productReducers'
 import { cartReducer } from './reducers/cartReducers'
 import { userLogReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
 import { orderCreateRendecer } from './reducers/orderReducers'

 const reducer = combineReducers({
    productList : productListReducer,
    productDetails : producDetailsReducer,
    cart: cartReducer,
    userLog: userLogReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateRendecer,
 })

 const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
      JSON.parse(localStorage.getItem('cartItems')) : []
 
 const userInfoFromStorage = localStorage.getItem('userInfo') ? 
      JSON.parse(localStorage.getItem('userInfo')) : null

 const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? 
      JSON.parse(localStorage.getItem('shippingAddress')) : {}

 const initialState = {
   cart: { 
    cartItems: cartItemsFromStorage, 
    shippingAddress: shippingAddressFromStorage,
  }, 
   userLog: {userInfo: userInfoFromStorage}
 }

 const middleware = [thunk]

 const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store