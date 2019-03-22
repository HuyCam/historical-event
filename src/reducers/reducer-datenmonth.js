import { actionType } from '../actions/actions';
export const reducerDate = (state = '' , action) => {
    switch (action.type) {
        case actionType.UPDATE_DATE:
            return action.payload;
        default:
            return state;
    }
}
export const reducerMonth = (state = '', action) => {
    switch (action.type) {
        case actionType.UPDATE_MONTH:
            return action.payload;
        default:
            return state;
    }
}