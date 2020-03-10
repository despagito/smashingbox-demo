const INITIAL_STATE = {
    wines: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_WINES_SUCCESS':
            return Object.assign({}, state, {
                wines: action.payload.wines
            });
        default:
            return state;
    }
};

export default reducer;
