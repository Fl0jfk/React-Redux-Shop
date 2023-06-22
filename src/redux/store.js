import {configureStore, combineReducers} from '@reduxjs/toolkit';
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/reducerTv';
import tabletReducer from './tablet/reducerTablet';

const rootReducer = combineReducers({
    phone: phoneReducer,
    tv: tvReducer,
    tablet: tabletReducer
})

const store = configureStore ({
    reducer: {rootReducer},
});
export default store;