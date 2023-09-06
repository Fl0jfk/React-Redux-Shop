import { createStore, combineReducers, applyMiddleware } from 'redux'
import phoneReducer from './phone/reducerPhone'
import tvReducer from './tv/reducerTv';

const rootReducer = combineReducers({
   phone: phoneReducer, 
   tv: tvReducer
})

const store = createStore(rootReducer, applyMiddleware());

export default store;