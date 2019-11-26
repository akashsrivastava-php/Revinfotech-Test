import { ADD_PRODUCT, UPDATE_PRODUCT, REMOVE_CART_ITEM, ADD_TO_CART } from './actionsTypes'

let productId = 0

export const add = payload => ({
    type: ADD_PRODUCT,
    payload : {
        ...payload,
        id: productId++,
        rating: 0
    }
})

export const update = (payload) => ({
    type: UPDATE_PRODUCT,
    payload
})

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export const removeItem = (payload) => ({
    type: REMOVE_CART_ITEM,
    payload
})