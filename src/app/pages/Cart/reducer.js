import Immutable from 'immutable'

import {
    UPDATE_CART,
    UPDATE_FORM_ERRORS,
    UPDATE_FORM_VALUES
} from './actions'

const initialState = Immutable.Map({
    cartItems: {}
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CART:
            return state
                .set('cartItems', action.payload.cartItems)
                .set('cartTotalCount', action.payload.cartTotalCount)
        case UPDATE_FORM_ERRORS:
        case UPDATE_FORM_VALUES:
            return state.mergeDeep(action.payload)
        default:
            return state
    }
}

export default reducer
