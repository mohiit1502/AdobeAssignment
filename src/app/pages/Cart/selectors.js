import {createSelector} from 'reselect'
import {createGetSelector} from 'reselect-immutable-helpers'

const getData = ({data}) => data

export const getLogin = createSelector(
    getData,
    (dataState) => {
        return dataState.pages.cart
    }
)

export const getFormValues = createGetSelector(getLogin, 'formValues')
export const getFormErrors = createGetSelector(getLogin, 'formErrors')