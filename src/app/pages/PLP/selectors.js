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
export const getFilterRange = createGetSelector(getPlp, 'filterRange')
export const getSortSelection = createGetSelector(getPlp, 'sortBy')
export const getSearchString = createGetSelector(getPlp, 'searchString')