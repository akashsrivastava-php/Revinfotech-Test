import { ADD_PRODUCT, UPDATE_PRODUCT, TOGGLE_TODO} from '../actions/actionsTypes'

const INITIAL_DATA = []

const ProductReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_PRODUCT:
            return [
                ...state,{
                    ...action.payload
                }
            ]
        case UPDATE_PRODUCT:
            return [
                ...action.payload
            ]
        default:
        return state
    }
}

export default ProductReducer