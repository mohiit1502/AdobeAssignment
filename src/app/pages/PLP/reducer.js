import Immutable from 'immutable'

import {
    DISPATCH_PRODUCTS,
    UPDATE_FORM_ERRORS,
    UPDATE_FORM_VALUES
} from './actions'

const initialState = Immutable.Map({
    products: []
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPATCH_PRODUCTS:
        case UPDATE_FORM_ERRORS:
        case UPDATE_FORM_VALUES:
            return state.mergeDeep(action.payload)
        default:
            return state
    }
}

export default reducer
