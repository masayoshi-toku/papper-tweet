import gurunavi from './gurunavi'
import shop from './shop'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ gurunavi, shop })

export default rootReducer
