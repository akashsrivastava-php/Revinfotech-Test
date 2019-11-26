import { ADD_TO_CART, REMOVE_CART_ITEM } from "../actions/actionsTypes";

const initialCart = []

const CartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,{
            ...action.payload
        }
    ]
    case REMOVE_CART_ITEM:
      return [
        ...action.payload
      ]
    default:
      return state;
  }
};

export default CartReducer;
