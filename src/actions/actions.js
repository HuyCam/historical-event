const UPDATE_DATE = 'UPDATE_DATE';
const UPDATE_MONTH = 'UPDATE_MONTH';
const UPDATE_DATA = 'UPDATE_DATA';
export const actionType = {
    UPDATE_DATE,
    UPDATE_MONTH,
    UPDATE_DATA
};

export const updateDate = (day) => {
    return {
        type: UPDATE_DATE,
        payload: day
    }
}

export const updateMonth = month => {
    return {
        type: UPDATE_MONTH,
        payload: month
    }
}


export const updateData = data => {
    console.log('data', data);
    return {
        type: UPDATE_DATA,
        payload: data
    }
}