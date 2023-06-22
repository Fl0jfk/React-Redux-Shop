import {configureStore, combineReducers} from '@reduxjs/toolkit';
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/reducerTv';
import tabletReducer from './tablet/reducerTablet';
import commentReducer from './comments/reducerComments';

const rootReducer = combineReducers({
    phone: phoneReducer,
    tv: tvReducer,
    tablet: tabletReducer,
    comment: commentReducer
})

const store = configureStore ({
    reducer: {rootReducer},
});
export default store;