import {createSelector} from 'reselect'
import {createGetSelector} from 'reselect-immutable-helpers'

const getData = ({data}) => data

export const getPlp = createSelector(
    getData,
    (dataState) => {
        return dataState.pages.plp
    }
)

export const getFormValues = createGetSelector(getPlp, 'formValues')
export const getFormErrors = createGetSelector(getPlp, 'formErrors')
export const getProducts = createGetSelector(getPlp, 'products')