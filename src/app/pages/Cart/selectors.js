import {createSelector} from 'reselect'
import {createGetSelector} from 'reselect-immutable-helpers'

const getData = ({data}) => data

export const getCart = createSelector(
    getData,
    (dataState) => {
        return dataState.pages.cart
    }
)

export const getFormValues = createGetSelector(getCart, 'formValues')
export const getFormErrors = createGetSelector(getCart, 'formErrors')
export const getCartTotalCount = createGetSelector(getCart, 'cartTotalCount')
export const getCartItems = createGetSelector(getCart, 'cartItems')