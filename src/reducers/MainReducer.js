import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import product from './ProductReducer'
import cart from './CartReducer'

export default combineReducers({
  product,
  cart,
  form: formReducer
})