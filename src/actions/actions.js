const UPDATE_DATE = 'UPDATE_DATE';
const UPDATE_MONTH = 'UPDATE_MONTH';
export const actionType = {
    UPDATE_DATE,
    UPDATE_MONTH
};

export const updateDate = (date) => {
    return {
        type: UPDATE_DATE,
        payload: date
    }
}

export const updateMonth = month => {
    return {
        type: UPDATE_MONTH,
        payload: month
    }
}