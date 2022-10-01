import {legacy_createStore,combineReducers} from 'redux'
import reducer from '../reducer'
const reducerds = combineReducers({
    reducer:reducer
}) 
const store = legacy_createStore(reducerds)
export default store