import {configureStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit';
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/reducerTv';
import tabletReducer from './tablet/reducerTablet';
import commentReducer from './comments/reducerComments';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    phone: phoneReducer,
    tv: tvReducer,
    tablet: tabletReducer,
    comment: commentReducer
})

const store = configureStore ({
    middleware: thunk,
    reducer: {rootReducer}
});
export default store;