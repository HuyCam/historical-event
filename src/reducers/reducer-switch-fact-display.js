

export const displayingFact = (state = '1', action) => {
    switch (action.type) {
        case '1':
            return '2';
        case '2': 
            return '1';
        default:
            return state;
    }
}