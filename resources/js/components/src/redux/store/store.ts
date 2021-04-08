import {AnyAction, createStore} from 'redux';
import {
    SET_CATEGORIES,
    SET_PRODUCTS,
} from "../../ts/consts/actions.const";

const store = createStore(reducer, {
    categories: [],
    products: [],
});

function reducer(state : any, action: AnyAction ) {
    switch(action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.products };

        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };

        default: return state;
    }
}

export default store;


