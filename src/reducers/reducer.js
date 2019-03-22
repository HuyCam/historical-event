import { combineReducers } from 'redux';

import { reducerDate, reducerMonth } from './reducer-datenmonth';

const Reducer = combineReducers({
    date: reducerDate,
    month: reducerMonth
});

export default Reducer;