import { combineReducers } from 'redux';

import { reducerDate, reducerMonth, reducerData } from './reducer-datenmonth';
import { displayingFact } from './reducer-switch-fact-display';
const Reducer = combineReducers({
    day: reducerDate,
    month: reducerMonth,
    data: reducerData,
    displayingFact: displayingFact
});

export default Reducer;