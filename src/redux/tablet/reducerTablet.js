import { BUY_TABLET } from "../type"

const initialStateTablet = {
    tablets: 10
}

const tabletReducer = (state = initialStateTablet, action) => {
    switch (action.type) {
        case BUY_TABLET: 
            return {
                ...state,
                tablets: state.tablets - action.payload
            }

        default: return state
    }
}

export default tabletReducer