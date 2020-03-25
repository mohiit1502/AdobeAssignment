import {combineReducers} from 'redux'

import loginReducer from './pages/Login/reducer'
import plpReducer from './pages/PLP/reducer'
import cartReducer from './pages/Cart/reducer'

export default combineReducers({
    data: combineReducers({
        pages: combineReducers({
            login: loginReducer,
            plp: plpReducer,
            cart: cartReducer
        })
    })
})
