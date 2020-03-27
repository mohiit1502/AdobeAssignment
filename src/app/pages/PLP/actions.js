export const DISPATCH_PRODUCTS = 'DISPATCH_PRODUCTS'
export const UPDATE_FORM_VALUES = 'UPDATE_BILLING_FORM_VALUES'
export const UPDATE_FORM_ERRORS = 'UPDATE_BILLING_FORM_ERRORS'

export const initializeLogin = () => (dispatch) => {
    // return Promise.all([
    //     dispatch(initializeApp())
    // ])
    // .then(() => ({statusCode: 200}))
    // .catch((err) => ({statusCode: err.statusCode || 500}))
}

export const dispatchProducts = (products) => {
    return {
        type: DISPATCH_PRODUCTS,
        payload: {products}
    }
}

export const updateFormValues = (formValues) => {
    return {
        type: UPDATE_FORM_VALUES,
        payload: formValues
    }
}

export const updateFormErrors = (formErrors) => {
    return {
        type: UPDATE_FORM_ERRORS,
        payload: formErrors
    }
}
    