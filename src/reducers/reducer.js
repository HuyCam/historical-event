import { combineReducers } from 'redux';

import { reducerDate, reducerMonth, reducerData } from './reducer-datenmonth';

const Reducer = combineReducers({
    day: reducerDate,
    month: reducerMonth,
    data: reducerData
});

export default Reducer;