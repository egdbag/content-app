import { DATA_NAMES } from '../actions/actionTypes'

const initialState = {
    data: null,
    products: null,
    isFetching: false,
    isFetching_: false,
    error: null
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case DATA_NAMES.START_FETCH:
            return { ...state, isFetching: false, error: action.payload };
        case DATA_NAMES.FINISH_FETCH:
            {
                return { isFetching: true, data: action.payload, error: null };
            }
        case DATA_NAMES.FAIL_FETCH:
            return { ...state, isFetching: false, error: action.payload };

        case DATA_NAMES.START_FETCH_:
            return { ...state, isFetching: false, error: action.payload };
        case DATA_NAMES.FINISH_FETCH_:
            {
                return { ...state, isFetching_: true, products: action.payload, error: null };
            }
        case DATA_NAMES.FAIL_FETCH_:
            return { ...state, isFetching: false, error: action.payload };
        
            case "CLEAR":
            return {  products: [], isFetching: false };


        default:
            return state;


    }
};

export default reducer;
